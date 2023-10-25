import { ScrollContainer } from 'components/common/container/Container.style';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import FollowingFeed from 'components/home/FollowingFeed';
import NoneFeed from 'components/home/NoneFeed';
import ProductList from 'components/product/ProductList';
import React from 'react';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  const toSearch = () => {
    navigate('/search');
  };
  //팔로잉 게시글 목록 요청 api
  return (
    <>
      <Header type="home" rightOnClick={toSearch} />
      <ScrollContainer>
        <ProductList />
        <FollowingFeed />
        {/* <NoneFeed /> */}
      </ScrollContainer>
      <NavBar />
    </>
  );
}
