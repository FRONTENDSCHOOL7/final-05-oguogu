import React from 'react';
import { Container, MoreBtn, UserId, PostImg, PostBox, PostText, ProfileImg, UserName, PostDate, PostComment, PostHeart } from './PostCard.style';

export default function PostCard({ id, content, kate, postImg, authname, authaccount, commentCoutn, heartCoutn, createdDate, updateDate, hearted }) {
  return (
    <Container>
      <ProfileImg $img="https://pbs.twimg.com/profile_images/1450121710674407426/SwOINBDw_400x400.jpg" />
      <PostBox>
        <div>
          <UserName>동글동글이ᰔᩚ</UserName>
          <UserId>@ dongggeul</UserId>
        </div>
        <PostText>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는
          인생의 힘있다.
        </PostText>
        <PostImg src="https://pbs.twimg.com/media/F6yblerbsAAxvfd?format=jpg&name=large" />
        <div style={{ marginTop: '-7px' }}>
          <PostHeart>58</PostHeart>
          <PostComment>12</PostComment>
        </div>
        <PostDate>2023년 9월 24일</PostDate>
        <MoreBtn />
      </PostBox>
    </Container>
  );
}
