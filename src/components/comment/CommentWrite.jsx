import React, { useEffect, useState } from 'react';
import { Container, Input, WriteButton } from 'components/comment/CommentWrite.style';
import { ProfileImage } from 'components/comment/CommentList.style';
import { commentWriteAPI } from 'api/comment';

export default function CommentWrite({ postid, update }) {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [comment, setComment] = useState('');
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  //댓글입력값이 있을때만 게시 버튼 활성화
  useEffect(() => {
    if (comment === '') {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  });

  const commentWrite = async (e) => {
    e.preventDefault();
    try {
      await commentWriteAPI(postid, comment);
      await update();
      setComment('');
    } catch (err) {
      alert('댓글 작성 실패');
    }
  };

  return (
    <Container onSubmit={commentWrite}>
      <ProfileImage $img={userInfo.userimg} />
      <Input placeholder="댓글 입력하기..." onChange={(e) => setComment(e.target.value)} value={comment} />
      <WriteButton disabled={btnDisabled}>게시</WriteButton>
    </Container>
  );
}
