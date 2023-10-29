import React from 'react';
import { ProfileYourBg } from 'pages/ProfileYour/ProfileYour.style';
import ProfileBox from 'components/profile/ProfileBox';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import ProductList from 'components/product/ProductList';
import PostGallery from 'components/post/PostGallery';

export default function ProfileYour() {
  return (
    <ProfileYourBg>
      <Header />
      <ProfileBox></ProfileBox>
      <ProductList />
      <PostGallery></PostGallery>
      <NavBar></NavBar>
    </ProfileYourBg>
  )
};
