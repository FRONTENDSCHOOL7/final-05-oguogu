import React from 'react';
import { Posttem, ProfileMyBg } from './ProfileMy.style';
import ProfileBox from 'components/profile/ProfileBox';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import ProductList from 'components/product/ProductList';
import Modalbottom from 'components/common/modal/Modalbottom';
import ModalCenter from 'components/common/modal/ModalCenter';

export default function ProfileMy() {

  return (
    <ProfileMyBg>
      <Header />
      <ProfileBox></ProfileBox>
      <ProductList />
      <Posttem></Posttem>
      <NavBar></NavBar>
      <Modalbottom />
      <ModalCenter/>
    </ProfileMyBg>
  )
}
