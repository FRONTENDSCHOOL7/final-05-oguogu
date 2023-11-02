import React from 'react';
import { Box, CommentText, Container, MoreBtn, UserName } from 'components/comment/CommentCard.style';
import { ProfileImage } from 'components/comment/CommentList.style';
import { useNavigate } from 'react-router';
import useModal from 'hook/useModal';
import useConfirm from 'hook/useConfirm';
import { commentDeleteAPI, commentReportAPI } from 'api/comment.api';

export default function CommentCard({ id, postid, content, date, authimg, authaccountname, authname, update }) {
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { openConfirm } = useConfirm();
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const isMyComment = authaccountname === userInfo.accountname;

  //댓글 작성자 프로필페이지로 이동
  const handletoProfile = () => {
    navigate(`/profile/${authaccountname}`);
  };

  //댓글삭제
  const commentDelete = () => {
    commentDeleteAPI(postid, id)
      .then(() => {
        update();
      })
      .catch((err) => {
        alert('댓글삭제를 실패했습니다.');
      });
  };
  //댓글삭제 confirm 모달 열기
  const commentDeleteConfirm = () => {
    openConfirm({
      content: '댓글을 삭제할까요?',
      type: 'delete',
      onClick: commentDelete,
    });
  };
  //댓글신고
  const commentReport = () => {
    commentReportAPI(postid, id)
      .then(() => {
        alert('🚨 신고가 완료되었습니다. 신속하게 처리하겠습니다.');
      })
      .catch((err) => {
        alert('댓글신고를 실패했습니다.');
      });
  };
  //댓글신고 confirm 모달 열기
  const commentReportConfirm = () => {
    openConfirm({
      content: '댓글을 신고할까요?',
      type: 'report',
      onClick: commentReport,
    });
  };

  //더보기버튼클릭 -> 모달 열기
  const handleClickMore = () => {
    isMyComment
      ? openModal({
          type: 'myComment',
          callback: [commentDeleteConfirm],
        })
      : openModal({
          type: 'userComment',
          callback: [commentReportConfirm],
        });
  };

  return (
    <Container>
      <ProfileImage $img={authimg} onClick={handletoProfile} />
      <Box>
        <UserName>{authname}</UserName>
        <CommentText>{content}</CommentText>
        <MoreBtn onClick={handleClickMore} />
      </Box>
    </Container>
  );
}
