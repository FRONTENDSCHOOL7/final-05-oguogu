import React, { useState } from 'react';
import { Container, UserImg, UserInfoBox, UserIntro, UserName } from 'components/follow/FollowCard.style';
import Button from 'components/common/button/Button';

export default function FollowCard({ username, accountname, intro, image, isfollow }) {
  const handleFollow = () => {
    //팔로우
  };

  const handleUnfllow = () => {
    //언팔로우
  };

  return (
    <Container>
      <UserImg />
      <UserInfoBox>
        <UserName>오곡이구름이짱팬</UserName>
        <UserIntro>안녕 날 소개하지 룰루랄랄</UserIntro>
      </UserInfoBox>
      {isfollow ? <Button size="xs" vari="border" onClick={handleUnfllow} text="팔로잉" /> : <Button size="xs" text="팔로우" onClick={handleFollow} />}
    </Container>
  );
}
