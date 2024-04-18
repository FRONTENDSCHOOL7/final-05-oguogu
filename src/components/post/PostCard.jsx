import React, { useState } from 'react';
import {
  Container,
  MoreBtn,
  UserId,
  PostImg,
  PostBox,
  PostText,
  ProfileImg,
  UserName,
  PostDate,
  PostComment,
  PostHeart,
  NextBtn,
  PostImgContainer,
  PostImgInner,
  PostImgWrapper,
  PrevBtn,
} from './PostCard.style';
import { useLocation, useNavigate } from 'react-router';
import useModal from 'hook/useModal';
import useConfirm from 'hook/useConfirm';
import { PostDeleteAPI } from 'api/post.api';
import { heartAPI, unheartAPI } from 'api/heart.api';

export default function PostCard({
  id,
  text,
  kate,
  postImg,
  profileImg,
  authname,
  authaccount,
  commentCount,
  heartCount,
  createdDate,
  isUpdate,
  hearted,
  update,
  type,
}) {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const ellipsis = location !== `/post/${id}`;
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const { openModal, closeModal } = useModal();
  const { openConfirm } = useConfirm();
  const [isheart, setIsHeart] = useState(hearted);
  const [heartNum, setHeartNum] = useState(heartCount);
  const [slideIndex, setSlideIndex] = useState(0);
  const filteredImages = postImg.split(',').filter((imgUrl) => imgUrl.trim() !== '');
  const moveToPrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? postImg.length - 1 : prev - 1));
  };
  const moveToNextSlide = () => {
    setSlideIndex((prev) => (prev === postImg.length - 1 ? 0 : prev + 1));
  };
  const isPrevBtnVisible = slideIndex !== 0; // 현재 이미지가 첫 번째 이미지면 이전 버튼을 감춘다.
  const isNextBtnVisible = filteredImages.length > 1 && slideIndex !== filteredImages.length - 1;

  //게시글 상세페이지로 이동
  const handletoPost = () => {
    navigate(`/post/${id}`);
  };
  //게시글 작성자 프로필페이지로 이동
  const handletoProfile = () => {
    navigate(`/profile/${authaccount}`);
  };

  //이미지 새창에서 보기
  const handleClickImg = (index) => {
    window.open(filteredImages[index], '_blank');
  };
  //heart토글
  const handleToggleHeart = () => {
    if (isheart) {
      unheartAPI(id)
        .then(() => {
          setIsHeart(false);
          setHeartNum(heartNum - 1);
        })
        .catch((err) => {
          alert('좋아요취소를 실패했습니다');
        });
    } else {
      heartAPI(id)
        .then(() => {
          setIsHeart(true);
          setHeartNum(heartNum + 1);
        })
        .catch((err) => {
          alert('좋아요를 실패했습니다');
        });
    }
  };

  //게시글 삭제
  const postDelete = () => {
    PostDeleteAPI(id)
      .then(() => {
        if (type === 'detail') {
          navigate(-1);
        } else {
          update();
        }
      })
      .catch((err) => {
        alert('게시글 삭제를 실패했습니다.');
      });
  };
  //게시글 수정 -> 수정페이지로 이동
  const toPostEditPage = () => {
    closeModal();
    navigate(`/post/${id}/edit`);
  };
  //게시글 신고
  const postReport = () => {
    alert('🚨 신고가 완료되었습니다. 신속하게 처리하겠습니다.');
  };

  //게시글 삭제 confirm모달 열기
  const postDeleteConfirm = () => {
    openConfirm({
      content: '게시글을 삭제할까요?',
      type: 'delete',
      onClick: postDelete,
    });
  };
  //게시글 신고 confirm모달 열기
  const postReportConfirm = () => {
    openConfirm({
      content: '게시글을 신고할까요?',
      type: 'report',
      onClick: postReport,
    });
  };

  //게시글 더보기 버튼
  const handleMoreBtn = () => {
    userInfo.accountname === authaccount
      ? openModal({
          type: 'myPost',
          callback: [postDeleteConfirm, toPostEditPage],
        })
      : openModal({
          type: 'userPost',
          callback: [postReportConfirm],
        });
  };

  return (
    <Container>
      <ProfileImg $img={profileImg} onClick={handletoProfile} />
      <PostBox>
        <div>
          <UserName onClick={handletoProfile}>{authname}</UserName>
          <UserId onClick={handletoProfile}>@{authaccount}</UserId>
        </div>
        <PostText $ell={ellipsis} onClick={handletoPost}>
          {text}
        </PostText>
        <div style={{ marginTop: '-7px' }}>
          {filteredImages.length > 0 && (
            <PostImgContainer>
              {isPrevBtnVisible ? <PrevBtn direction="prev" onClick={moveToPrevSlide}></PrevBtn> : null}
              <PostImgWrapper $slideIndex={slideIndex}>
                {filteredImages.map((imgUrl, index) => (
                  <PostImgInner key={index}>
                    <PostImg src={imgUrl} onClick={() => handleClickImg(index)} />
                  </PostImgInner>
                ))}
              </PostImgWrapper>
              {isNextBtnVisible ? <NextBtn direction="next" onClick={moveToNextSlide}></NextBtn> : null}
            </PostImgContainer>
          )}
          <PostHeart $hearted={isheart} onClick={handleToggleHeart}>
            {heartNum}
          </PostHeart>
          <PostComment onClick={handletoPost}>{commentCount}</PostComment>
        </div>
        <PostDate $isUpdate={isUpdate}>
          {createdDate[0]}년 {createdDate[1]}월 {createdDate[2]}일
        </PostDate>
        <MoreBtn onClick={handleMoreBtn} />
      </PostBox>
    </Container>
  );
}
