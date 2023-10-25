import React from 'react';
import { ProfileYourBg } from 'pages/ProfileYour/ProfileYour.style';
import ProfileBox from 'components/profile/ProfileBox';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import ProductList from 'components/product/ProductList';

export default function ProfileYour() {
  return (
    <ProfileYourBg>
      <Header />
      <ProfileBox></ProfileBox>
      <ProductList />
      <NavBar></NavBar>
    </ProfileYourBg>
  )
};
