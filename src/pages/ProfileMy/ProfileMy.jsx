import React from 'react';
import { Posttem, ProfileMyBg } from './ProfileMy.style';
import ProfileBox from 'components/profile/ProfileBox';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import ProductList from 'components/product/ProductList';

export default function ProfileMy() {

  return (
    <ProfileMyBg>
      <Header />
      <ProfileBox></ProfileBox>
      <ProductList />
      <Posttem></Posttem>
      <NavBar></NavBar>
    </ProfileMyBg>
  )
}
