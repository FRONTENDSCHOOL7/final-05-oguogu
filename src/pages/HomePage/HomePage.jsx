import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ScrollContainer } from 'components/common/container/Container.style';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import FollowingFeed from 'components/home/FollowingFeed';
import NoneFeed from 'components/home/NoneFeed';
import ProductList from 'components/product/ProductList';
import { follwingPostAPI } from 'api/post.api';

export default function HomePage() {
  const [feed, setFeed] = useState(null);

  const navigate = useNavigate();
  const toSearch = () => {
    navigate('/search');
  };

  //팔로잉 게시글 목록 요청 api
  useEffect(() => {
    const promise = follwingPostAPI();
    promise
      .then((res) => {
        setFeed(res.posts);
      })
      .catch((err) => {
        alert('error: ' + err);
      });
  }, []);

  return (
    <>
      <Header type="home" rightOnClick={toSearch} />
      {/* <ScrollContainer>
        <ProductList />
        <FollowingFeed posts={feed} />
      </ScrollContainer> */}
      {feed === null ||
        (feed.length === 0 ? (
          <NoneFeed />
        ) : (
          <ScrollContainer>
            <ProductList />
            <FollowingFeed posts={feed} />
          </ScrollContainer>
        ))}
      <NavBar />
    </>
  );
}
