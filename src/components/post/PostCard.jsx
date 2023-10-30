import React from 'react';
import { Container, MoreBtn, UserId, PostImg, PostBox, PostText, ProfileImg, UserName, PostDate, PostComment, PostHeart } from './PostCard.style';
import { useNavigate } from 'react-router';

export default function PostCard({ id, text, kate, postImg, profileImg, authname, authaccount, commentCount, heartCount, createdDate, hearted }) {
  const navigate = useNavigate();

  //게시글 상세페이지로 이동
  const handletoPost = () => {
    navigate(`/post/${id}`);
  };
  //게시글 작성자 프로필페이지로 이동
  const handletoProfile = () => {
    navigate(`/profile/${authaccount}`);
  };
  //이미지 새창에서 보기
  const handleClickImg = () => {
    window.open(postImg, '_blank');
  };
  //heart토글
  const handleToggleHeart = () => {};

  return (
    <Container>
      <ProfileImg $img={profileImg} onClick={handletoProfile} />
      <PostBox>
        <div onClick={handletoProfile}>
          <UserName>{authname}</UserName>
          <UserId>@{authaccount}</UserId>
        </div>
        <PostText onClick={handletoPost}>{text}</PostText>
        {postImg !== '' && <PostImg src={postImg} onClick={handleClickImg} />}
        <div style={{ marginTop: '-7px' }}>
          <PostHeart $hearted={hearted} onClick={handleToggleHeart}>
            {heartCount}
          </PostHeart>
          <PostComment onClick={handletoPost}>{commentCount}</PostComment>
        </div>
        <PostDate>
          {createdDate[0]}년 {createdDate[1]}월 {createdDate[2]}일
        </PostDate>
        <MoreBtn />
      </PostBox>
    </Container>
  );
}
