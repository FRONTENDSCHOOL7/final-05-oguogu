import React, { useState } from 'react';
import { Container, UserImg, UserInfoBox, UserIntro, UserName } from 'components/follow/FollowCard.style';
import Button from 'components/common/button/Button';
import { followAPI, unfollowAPI } from 'api/follow.api';
import { useNavigate } from 'react-router';

export default function FollowCard({ username, accountname, intro, image, isfollow, updatelist }) {
  const navigate = useNavigate();
  //팔로우
  const handleFollow = async () => {
    await followAPI(accountname)
      .then(() => {})
      .catch(() => {
        alert('언팔로우를 실패했습니다');
      });
    updatelist();
  };

  //언팔로우
  const handleUnfllow = async () => {
    await unfollowAPI(accountname)
      .then((res) => {})
      .catch((err) => {
        alert('언팔로우를 실패했습니다');
      });
    updatelist();
  };

  //해당 유저 프로필로 이동
  const handletoProfile = () => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <Container>
      <UserImg $img={image} onClick={handletoProfile} />
      <UserInfoBox>
        <UserName>{username}</UserName>
        <UserIntro>{intro}</UserIntro>
      </UserInfoBox>
      {isfollow ? <Button size="xs" vari="border" onClick={handleUnfllow} text="팔로잉" /> : <Button size="xs" text="팔로우" onClick={handleFollow} />}
    </Container>
  );
}
