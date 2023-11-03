import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ScrollContainer } from 'components/common/container/Container.style';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import FollowingFeed from 'components/home/FollowingFeed';
import NoneFeed from 'components/home/NoneFeed';
import ProductList from 'components/product/ProductList';
import { follwingPostAPI } from 'api/post.api';
import BottomModal from 'components/common/modal/BottomModal';
import ConfirmModal from 'components/common/modal/ConfirmModal';

export default function HomePage() {
  const [feed, setFeed] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const navigate = useNavigate();
  const toSearch = () => {
    navigate('/search');
  };

  const followPost = () => {
    follwingPostAPI(0)
      .then((res) => {
        setFeed(res.posts);
      })
      .catch((err) => {
        alert('error: ' + err);
      });
  };

  //팔로잉 게시글 목록 요청 api
  useEffect(() => {
    followPost();
  }, []);

  return (
    <>
      <Header type="home" rightOnClick={toSearch} />
      {feed === null ||
        (feed.length === 0 ? (
          <NoneFeed />
        ) : (
          <ScrollContainer>
            <ProductList type="home" accountname={userInfo.accountname} />
            <FollowingFeed feed={feed} update={followPost} />
          </ScrollContainer>
        ))}
      <NavBar />
      <BottomModal />
      <ConfirmModal />
    </>
  );
}
