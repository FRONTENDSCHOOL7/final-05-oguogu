import React, { useEffect, useState } from 'react';
import { follwingListAPI } from 'api/follow.api';
import { ScrollContainer } from 'components/common/container/Container.style';
import ProductSection from 'components/product-page/ProductSection';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import BottomModal from 'components/common/modal/BottomModal';
import ConfirmModal from 'components/common/modal/ConfirmModal';

export default function AllProductPage() {
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const [followinglist, setFollowinglist] = useState(null);

  const accountArray = () => {
    return followinglist.map((user) => user.accountname);
  };

  const followingList = () => {
    follwingListAPI(userInfo.accountname)
      .then((res) => {
        setFollowinglist(res);
      })
      .catch((err) => {
        alert('팔로잉 목록을 불러오는데 실패했습니다');
      });
  };

  useEffect(() => {
    followingList();
  }, []);

  return (
    <>
      <Header type="text" text="판매 상품" />
      <ScrollContainer $bg>{followinglist !== null && <ProductSection type="all" accountname={accountArray()} />}</ScrollContainer>
      <NavBar />
      <BottomModal />
      <ConfirmModal />
    </>
  );
}
