import React from 'react'
import { ProfileBoxBg, ProfileBtns, ProfileHeader, ProfileImage, ProfileMain } from './ProfileBox.style'
import Button from '../button/Button'
// import profileimg from 'assets/images/icon_ogudog_gray.png'

export default function ProfileBox() {
  return (
    <ProfileBoxBg>
      <ProfileHeader>
        <span><p><span>2950</span>followers</p></span>
        <ProfileImage></ProfileImage>
        <span><p><span>128</span>followings</p></span>
      </ProfileHeader>
        
      <ProfileMain>
        <li>오곡구름 주인장</li>
        <li>@ oguogu_5959</li>
        <li>세상에서 제일 귀여운 오구오구네</li>
      </ProfileMain>
      
      <ProfileBtns>
        <Button  size="md"  vari="border" text="프로필 수정" />
        <Button  size="sm"  vari="border"  text="상품등록" /> 
      </ProfileBtns>
    </ProfileBoxBg>
  )
}
