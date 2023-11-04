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
import { follwingListAPI } from 'api/follow.api';

export default function HomePage() {
  const [feed, setFeed] = useState(null);
  const [isfollowing, setIsfollowing] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const navigate = useNavigate();
  const toSearch = () => {
    navigate('/search');
  };

  const isFollowing = () => {
    follwingListAPI(userInfo.accountname)
      .then((res) => {
        setIsfollowing(res);
      })
      .catch((err) => {
        alert('팔로잉 목록을 불러오는데 실패했습니다');
      });
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
    isFollowing();
  }, []);

  return (
    <>
      <Header type="home" rightOnClick={toSearch} />
      {isfollowing === null ||
        (isfollowing.length === 0 ? (
          <NoneFeed />
        ) : (
          <ScrollContainer>
            <ProductList type="home" accountname={userInfo.accountname} />
            <FollowingFeed />
          </ScrollContainer>
        ))}
      <NavBar />
      <BottomModal />
      <ConfirmModal />
    </>
  );
}
