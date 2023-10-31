import React from 'react';
import { Box, CommentText, Container, MoreBtn, UserName } from 'components/comment/CommentCard.style';
import { ProfileImage } from 'components/comment/CommentList.style';
import { useNavigate } from 'react-router';

export default function CommentCard({ id, content, date, authimg, authaccountname, authname }) {
  const navigate = useNavigate();

  //댓글 작성자 프로필페이지로 이동
  const handletoProfile = () => {
    navigate(`/profile/${authaccountname}`);
  };

  return (
    <Container>
      <ProfileImage $img={authimg} onClick={handletoProfile} />
      <Box>
        <UserName>{authname}</UserName>
        <CommentText>{content}</CommentText>
        <MoreBtn />
      </Box>
    </Container>
  );
}
