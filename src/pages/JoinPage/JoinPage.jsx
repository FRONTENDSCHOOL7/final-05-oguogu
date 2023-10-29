import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/publicRoute/Header';
import Button from 'components/common/button/Button';
import { Container, Label, Input, Line, ErrMsg } from 'components/publicRoute/PublicRoutePage.style';
import { useValidation } from 'hook/useValidation';

export default function JoinPage() {
  const navigate = useNavigate();
  const { email, password, setEmail, setPassword, loginError, validateLogin, errMsgVisible, setErrMsgVisible } = useValidation();
  const [disabled, setDisabled] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleBlur = (event) => {
    if (event.target.type === 'email') {
      setEmailFocus(false);
    } else if (event.target.type === 'password') {
      setPwFocus(false);
    }
    if (!email || !password) {
      setErrMsgVisible(true);
    }
    validateLogin();
  };

  const handleFocus = (event) => {
    if (event.target.type === 'email') {
      setEmailFocus(true);
    } else if (event.target.type === 'password') {
      setPwFocus(true);
    }
    setErrMsgVisible(false);
  };

  useEffect(() => {
    setDisabled(!(email && password));
  }, [email, password, loginError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    validateLogin();
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    navigate('/profilesetting');
  };

  return (
    <>
      <Header text="이메일로 회원가입" isRender={true} />
      <Container>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="user-email">이메일</Label>
          <Input
            type="email"
            id="user-email"
            value={email}
            placeholder="이메일 주소를 입력해 주세요."
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></Input>
          <Line $emailFocus={emailFocus}></Line>

          <Label htmlFor="user-pw">비밀번호</Label>
          <Input
            type="password"
            id="user-pw"
            value={password}
            placeholder="비밀번호를 입력해 주세요."
            autoComplete="current-password"
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></Input>
          <Line $pwFocus={pwFocus}></Line>
        </form>
        <Button size="lg" vari="basic" text="다음" type="submit" onClick={handleSubmit} disabled={disabled} />
        {errMsgVisible && loginError && <ErrMsg>{loginError}</ErrMsg>}
      </Container>
    </>
  );
}
