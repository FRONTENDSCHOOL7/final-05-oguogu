import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ScrollContainer } from 'components/common/container/Container.style';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import FollowList from 'components/follow/FollowList';
import { follwingListAPI } from 'api/follow.api';
import ConfirmModal from 'components/common/modal/ConfirmModal';

export default function FollowingsPage() {
  const { accountname } = useParams();
  const [followings, setFollowings] = useState(null);

  const followinglist = () => {
    follwingListAPI(accountname)
      .then((res) => {
        setFollowings(res);
      })
      .catch((err) => {
        alert('팔로워 목록 불러오기에 실패했습니다');
      });
  };

  useEffect(() => {
    followinglist();
  }, []);

  return (
    <>
      <Header type="text" text="Followings" />
      <ScrollContainer $bg>{followings !== null && <FollowList userlist={followings} updatelist={followinglist} />}</ScrollContainer>
      <NavBar />
      <ConfirmModal />
    </>
  );
}
