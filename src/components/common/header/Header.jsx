import React from 'react';
import { BackBtn, CenterText, Container, EditBtn, LeftText, Logo, SearchBtn, SerachInput } from 'components/common/header/Header.style';
import logo from 'assets/images/logo_oguogu.png';
import Button from 'components/common/button/Button';

export default function Header({ type, text, btnText, rightOnClick, leftOnClick }) {
  switch (type) {
    case 'home':
      return (
        <Container $justify="space-between">
          <h1 className="a11y-hidden">오구오구 홈화면</h1>
          <Logo src={logo} />
          <SearchBtn onClick={rightOnClick} />
        </Container>
      );
    case 'search':
      return (
        <Container $justify="space-between">
          <BackBtn type="button" onClick={leftOnClick} />
          <SerachInput placeholder="계정 검색" />
        </Container>
      );
    case 'follow':
      return (
        <Container>
          <BackBtn type="button" onClick={leftOnClick} />
          <CenterText>{text}</CenterText>
        </Container>
      );
    case 'btn':
      return (
        <Container $justify="space-between">
          <BackBtn type="button" onClick={leftOnClick} />
          <Button size="sm" text={btnText} onClick={rightOnClick} />
        </Container>
      );
    case 'chatroom':
      return (
        <Container $justify="space-between">
          <BackBtn type="button" onClick={leftOnClick} />
          <LeftText>{text}</LeftText>
          <EditBtn type="button" onClick={rightOnClick} />
        </Container>
      );
    default:
      return (
        <Container $justify="space-between">
          <BackBtn type="button" onClick={leftOnClick} />
          <EditBtn type="button" onClick={rightOnClick} />
        </Container>
      );
  }
}
