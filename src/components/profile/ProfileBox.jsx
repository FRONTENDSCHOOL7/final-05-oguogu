import React from 'react'
import { ChatBtn, ProfileBoxBg, ProfileBtns, ProfileHeader, ProfileImage, ProfileMain, ShareBtn } from './ProfileBox.style'
import Button from '../common/button/Button'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

export default function ProfileBox() {
  const location = useLocation();
  const { pathname } = location;

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
        {pathname === '/profile' && ( 
          <>
          <Button size="md" vari="border" text="프로필 수정" />
          <Button size="sm" vari="border" text="상품등록" />
          </>
        )}
        {pathname === '/home/yourprofile' && (           
          <>
          <Link to="/chatroom"><ChatBtn></ChatBtn></Link>
          <Button  size="md"  text="팔로우" />
          <ShareBtn></ShareBtn>
          </> 
        )}
      </ProfileBtns>
    </ProfileBoxBg>
  )
}
