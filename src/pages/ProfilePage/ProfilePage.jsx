import React, { useEffect, useState } from 'react';
import ProfileBox from 'components/profile/ProfileBox';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import { ScrollContainer } from 'components/common/container/Container.style';
import ProductList from 'components/product/ProductList';
import Feed from 'components/profile/Feed';
import { useParams } from 'react-router';
import ModalBottom from 'components/common/modal/Modalbottom';

export default function ProfilePage() {
  const { accountname } = useParams();
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const isMyProfile = accountname === userInfo.accountname;

  const [ModalBottomOpen, setModalBottomOpen] = useState(false);
  const toggleModalBottom = () => {
    setModalBottomOpen(!ModalBottomOpen);
  };

  return (
    <>
      <Header rightOnClick={toggleModalBottom}/>
      <ScrollContainer>
        <ProfileBox accountname={accountname} isMyProfile={isMyProfile} />
        <ProductList type="profile" accountname={accountname} />
        <Feed accountname={accountname} />
      </ScrollContainer>
      <NavBar></NavBar>

      {ModalBottomOpen && 
      <ModalBottom type='profileMore'/>}
    </>
  );
}
