import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import NoneFeed from 'components/home/NoneFeed';
import React from 'react';

export default function HomePage() {
  //팔로잉 게시글 목록 요청 api
  return (
    <>
      <Header type="home" />
      <NoneFeed />
      <NavBar />
    </>
  );
}
