import React from 'react';
import JoinForm from 'components/join/JoinForm';
import Header from 'components/login/Header';
import { Container } from 'pages/LoginPage/EmailLoginPage.style';

export default function JoinPage() {
  return (
    <>
      <Header text="이메일로 회원가입" />
      <Container>
        <JoinForm />
      </Container>
    </>
  );
}
