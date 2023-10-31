import React from 'react';
import { ScrollContainer } from 'components/common/container/Container.style';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import FollowList from 'components/follow/FollowList';

export default function FollowersPage() {
  return (
    <>
      <Header type="follow" text="Followers" />
      <ScrollContainer $bg>
        <FollowList />
      </ScrollContainer>
      <NavBar />
    </>
  );
}
