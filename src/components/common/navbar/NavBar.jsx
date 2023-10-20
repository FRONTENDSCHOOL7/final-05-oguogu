import React, { useState } from 'react';
import { Container, NavButton, NavIcon, NavLink, NavText } from './NavBar.style';
import { useLocation } from 'react-router';
import iconHome from 'assets/images/icon_home.png';
import iconHomeFill from 'assets/images/icon_home_fill.png';
import iconChat from 'assets/images/icon_message.png';
import iconChatFill from 'assets/images/icon_message_fill.png';
import iconEdit from 'assets/images/icon_edit.png';
import iconOgu from 'assets/images/icon_ogudog_gray01.png';
import iconOguFill from 'assets/images/icon_ogudog_pink.png';

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <Container>
      <NavLink to="/home">
        <NavIcon src={pathname === '/home' ? iconHomeFill : iconHome} />
        <NavText color={pathname === '/home' ? true : false}>홈</NavText>
      </NavLink>
      <NavLink to="/chat">
        <NavIcon src={pathname === '/chat' ? iconChatFill : iconChat} />
        <NavText color={pathname === '/chat' ? true : false}>채팅</NavText>
      </NavLink>
      <NavLink to="/post/upload">
        <NavIcon src={iconEdit} />
        <NavText color={false}>게시물 작성</NavText>
      </NavLink>
      <NavLink to="/profile">
        <NavIcon src={pathname === '/profile' ? iconOguFill : iconOgu} />
        <NavText color={pathname === '/profile' ? true : false}>프로필</NavText>
      </NavLink>
    </Container>
  );
}
