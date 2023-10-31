import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ScrollContainer } from 'components/common/container/Container.style';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import FollowList from 'components/follow/FollowList';
import { follwerListAPI, unfollowAPI } from 'api/follow.api';
import ConfirmModal from 'components/common/modal/ConfirmModal';

export default function FollowersPage() {
  const { accountname } = useParams();
  const [followers, setFollowers] = useState(null);
  const [unfollowUser, setUnfollowUser] = useState(null);

  const followerlist = () => {
    follwerListAPI(accountname)
      .then((res) => {
        setFollowers(res);
      })
      .catch((err) => {
        alert('팔로워 목록 불러오기에 실패했습니다');
      });
  };

  const unfollow = async () => {
    await unfollowAPI(unfollowUser)
      .then((res) => {})
      .catch((err) => {
        alert('언팔로우를 실패했습니다');
      });
    followerlist();
  };

  useEffect(() => {
    followerlist();
  }, []);

  return (
    <>
      <Header type="follow" text="Followers" />
      <ScrollContainer $bg>
        {followers !== null && <FollowList userlist={followers} updatelist={followerlist} setUnfollowUser={setUnfollowUser} />}
      </ScrollContainer>
      <NavBar />
      <ConfirmModal onClick={unfollow} />
    </>
  );
}
