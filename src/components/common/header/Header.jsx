import React from 'react';
import { CenterText, Container, EditBtn, LeftText, Logo, SearchBtn, SerachInput } from 'components/common/header/Header.style';
import logo from 'assets/images/logo_oguogu.png';
import Button from 'components/common/button/Button';
import { useNavigate } from 'react-router';

export default function Header({ type, text, btnText, rightOnClick, btndisabled }) {
  const navigate = useNavigate();
  const toBack = () => {
    navigate(-1);
  };
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
          <Button vari="back" onClick={toBack} />
          <SerachInput placeholder="계정 검색" />
        </Container>
      );
    case 'follow':
      return (
        <Container>
          <Button vari="back" onClick={toBack} />
          <CenterText>{text}</CenterText>
        </Container>
      );
    case 'btn':
      return (
        <Container $justify="space-between">
          <Button vari="back" onClick={toBack} />
          <Button size="sm" text={btnText} onClick={rightOnClick} disabled={btndisabled} />
        </Container>
      );
    case 'chatroom':
      return (
        <Container $justify="space-between">
          <Button vari="back" onClick={toBack} />
          <LeftText>{text}</LeftText>
          <EditBtn type="button" onClick={rightOnClick} />
        </Container>
      );
    case 'postdetail':
      return (
        <Container $justify="space-between">
          <Button vari="back" onClick={toBack} />
        </Container>
      );
    default:
      return (
        <Container $justify="space-between">
          <Button vari="back" onClick={toBack} />
          <EditBtn type="button" onClick={rightOnClick} />
        </Container>
      );
  }
}
