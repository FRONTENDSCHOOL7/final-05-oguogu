import React, { useState } from 'react';
import { Posttem, ProfileMyBg } from './ProfileMy.style';
import ProfileBox from 'components/profile/ProfileBox';
import Header from 'components/common/header/Header';
import NavBar from 'components/common/navbar/NavBar';
import ProductList from 'components/product/ProductList';
import ModalBottom from 'components/common/modal/ModalBottom';

export default function ProfileMy() {
  const [ModalBottomOpen, setModalBottomOpen] = useState(false);

  const toggleModalBottom = () => {
    setModalBottomOpen(!ModalBottomOpen);
  };

  return (
    <ProfileMyBg>
      <Header rightOnClick={toggleModalBottom}/>
      <ProfileBox></ProfileBox>
      <ProductList />
      <Posttem></Posttem>
      <NavBar></NavBar>
      {ModalBottomOpen && 
      <ModalBottom/>}
    </ProfileMyBg>
  )
}
