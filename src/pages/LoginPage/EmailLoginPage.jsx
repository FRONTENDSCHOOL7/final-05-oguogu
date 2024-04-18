import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/login/Header';
import { Container, Join } from 'pages/LoginPage/EmailLoginPage.style';
import Loginform from 'components/login/LoginForm';

export default function EmailLoginPage() {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate('/join');
  };

  return (
    <>
      <Header text="로그인" />
      <Container>
        <Loginform />
        <Join onClick={handleSignUpClick}>이메일로 회원가입</Join>
      </Container>
    </>
  );
}
