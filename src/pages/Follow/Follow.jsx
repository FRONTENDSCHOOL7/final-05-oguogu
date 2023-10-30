import React from 'react'
import { FollowBg, UserList, UserListEle } from './Follow.style'
import Header from 'components/common/header/Header'
import userImg from 'assets/images/profile_img_tem.jpg'
import Button from 'components/common/button/Button'
import NavBar from 'components/common/navbar/NavBar'
import { useLocation } from 'react-router'

export default function Follow() {
  const location = useLocation();
  const { pathname } = location;

  const isSearchPath = pathname === '/search';
  
  return (
    <FollowBg>
      {isSearchPath ? (
        <Header type="search" />
      ) : (
        <Header type="follow" text="Followings" />
      )}
      <UserList>
        <UserListEle>
          <img src={userImg} alt='유저 프로필'></img>
          <p><span>쿠루미히어로즈</span>좌충우돌 우당탕탕 말썽쟁이 쿠리미네 </p>
          {isSearchPath ? null : <Button size='xs' text="팔로우" />}
        </UserListEle>
        <UserListEle>
          <img src={userImg} alt='유저 프로필'></img>
          <p><span>쿠루미히어로즈</span>좌충우돌 우당탕탕 말썽쟁이 쿠리미네 </p>
          {isSearchPath ? null : <Button size='xs' text="팔로우" />}
        </UserListEle>
        <UserListEle>
          <img src={userImg} alt='유저 프로필'></img>
          <p><span>쿠루미히어로즈</span>좌충우돌 우당탕탕 말썽쟁이 쿠리미네 </p>
          {isSearchPath ? null : <Button size='xs' text="팔로우" />}
        </UserListEle>

      </UserList>
      <NavBar></NavBar>
    </FollowBg>
  )
}