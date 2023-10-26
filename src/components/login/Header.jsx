import React from 'react';
import Button from 'components/common/button/Button';
import { useNavigate } from 'react-router';
import { Container, CenterText } from 'components/login/Header.style';

export default function Header({ text }) {
  const navigate = useNavigate();
  const toBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Button vari="back" onClick={toBack} />
      <CenterText>{text}</CenterText>
    </Container>
  );
}
