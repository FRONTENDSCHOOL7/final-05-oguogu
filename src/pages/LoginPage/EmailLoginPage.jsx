import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/login/Header';
import Button from 'components/common/button/Button';
import { Container, Label, EmailInput, PwInput, Line, Join, ErrMsg } from 'pages/LoginPage/EmailLoginPage.style';
import { useValidation } from 'hook/useValidation';
import { loginAPI } from 'api/login.api';

export default function EmailLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/home';
  const handleSignUpClick = () => {
    navigate('/join');
  };

  const { email, password, setEmail, setPassword, loginError, setLoginError, validateLogin, errMsgVisible, setErrMsgVisible } = useValidation();
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
    const promise = loginAPI(email, password);
    promise.then((res) => {
      if (res.user) {
        const userInfo = { id: res.user._id, accountname: res.user.accountname, username: res.user.username, userimg: res.user.image };
        localStorage.setItem('oguUserInfo', JSON.stringify(userInfo));
        localStorage.setItem('oguToken', res.user.token);
        navigate(from);
      } else {
        setErrMsgVisible(true);
        setLoginError('이메일 또는 비밀번호가 일치하지 않습니다.');
      }
    });
  };

  return (
    <>
      <Header text="로그인" />
      <Container>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="user-email">이메일</Label>
          <EmailInput
            type="email"
            id="user-email"
            value={email}
            placeholder="이메일 주소를 입력해 주세요."
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></EmailInput>
          <Line $emailFocus={emailFocus}></Line>

          <Label htmlFor="user-pw">비밀번호</Label>
          <PwInput
            type="password"
            id="user-pw"
            value={password}
            placeholder="비밀번호를 입력해 주세요."
            autoComplete="current-password"
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></PwInput>
          <Line $pwFocus={pwFocus}></Line>
        </form>
        {errMsgVisible && loginError && <ErrMsg>{loginError}</ErrMsg>}
        <Button size="lg" vari="basic" text="로그인" type="submit" onClick={handleSubmit} disabled={disabled} />
        <Join onClick={handleSignUpClick}>이메일로 회원가입</Join>
      </Container>
    </>
  );
}
