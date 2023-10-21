import React from 'react';
import { BackBtn, Container, Logo, SearchBtn, SerachInput } from './Header.style';
import { useLocation } from 'react-router';
import logo from 'assets/images/logo_oguogu.png';

export default function Header({ type }) {
  switch (type) {
    case 'home':
      return (
        <Container>
          <h1 className="a11y-hidden">오구오구 홈화면</h1>
          <Logo src={logo} />
          <SearchBtn />
        </Container>
      );
    case 'search':
      return (
        <Container>
          <BackBtn />
          <SerachInput placeholder="계정 검색" />
        </Container>
      );
    default:
      return <Container></Container>;
  }
}
