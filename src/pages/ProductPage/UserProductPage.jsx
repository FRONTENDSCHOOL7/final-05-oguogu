import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { profileAPI } from 'api/profile.api';
import { ScrollContainer } from 'components/common/container/Container.style';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import ProductSection from 'components/product-page/ProductSection';
import BottomModal from 'components/common/modal/BottomModal';
import ConfirmModal from 'components/common/modal/ConfirmModal';

export default function UserProductPage() {
  const { accountname } = useParams();
  const [userName, setUserName] = useState(null);

  //프로필정보 불러오기
  const loadProfileInfo = () => {
    const promise = profileAPI(accountname);
    promise
      .then((res) => {
        setUserName(res.username);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    loadProfileInfo();
  }, []);
  return (
    <>
      <Header type="text" text="판매 상품" />
      <ScrollContainer $bg>{userName !== null && <ProductSection type="user" accountname={accountname} username={userName} />}</ScrollContainer>
      <NavBar />
      <BottomModal />
      <ConfirmModal />
    </>
  );
}
