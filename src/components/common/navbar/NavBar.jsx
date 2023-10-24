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
        <NavText $textcolor={pathname === '/home' ? 'var(--main-color-01)' : 'var(--gray-01)'}>홈</NavText>
      </NavLink>
      <NavLink to="/chatlist">
        <NavIcon src={pathname === '/chat' ? iconChatFill : iconChat} />
        <NavText $textcolor={pathname === '/chat' ? 'var(--main-color-01)' : 'var(--gray-01)'}>채팅</NavText>
      </NavLink>
      <NavLink to="/upload">
        <NavIcon src={iconEdit} />
        <NavText $textcolor="var(--gray-01)">게시물 작성</NavText>
      </NavLink>
      <NavLink to="/profile">
        <NavIcon src={pathname === '/profile' ? iconOguFill : iconOgu} />
        <NavText $textcolor={pathname === '/profile' ? 'var(--main-color-01)' : 'var(--gray-01)'}>프로필</NavText>
      </NavLink>
    </Container>
  );
}
