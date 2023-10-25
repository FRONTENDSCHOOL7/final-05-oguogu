import React from 'react'
import { Posttem, Producttem, ProfileMyBg } from './ProfileMy.style'
import ProfileBox from 'components/common/profile/ProfileBox'
import Header from 'components/common/header/Header'
import NavBar from 'components/common/navbar/NavBar'

export default function ProfileMy() {
  return (
    <ProfileMyBg>
      <Header /> 
      <ProfileBox></ProfileBox>
      <Producttem></Producttem>
      <Posttem></Posttem>
      <NavBar></NavBar>
    </ProfileMyBg>
  )
}
