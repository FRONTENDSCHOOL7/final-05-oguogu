import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginAPI } from 'api/login.api';
import { Container, Label, EmailInput, PwInput, Line, Join, ErrMsg } from 'pages/LoginPage/EmailLoginPage.style';
import Button from 'components/common/button/Button';
import useUserForm from 'hook/useUserForm';
import Header from 'components/login/Header';

export default function EmailLoginPage() {
  const [disabled, setDisabled] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [errEmailVisible, setErrEmailVisible] = useState(false);
  const [errPwVisible, setErrPwVisible] = useState(false);
  const [loginError, setLoginError] = useState('');

  const { email, password, setEmail, setPassword, isValidValues, handleChange, handleSetErrorMessage, errorMessage } = useUserForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/home';
  const handleSignUpClick = () => {
    setEmail('');
    setPassword('');
    navigate('/join');
  };

  //인풋값 입력
  const handleData = (event) => {
    setLoginError('');
    handleChange(event);
    setErrEmailVisible(false);
    setErrPwVisible(false);
  };

  // 인풋값 에러메시지
  const handleBlur = (event) => {
    handleSetErrorMessage();

    if (event.target.type === 'email') {
      setErrEmailVisible(true);
      setErrPwVisible(false);
    } else if (event.target.type === 'password') {
      setErrPwVisible(true);
      setErrEmailVisible(false);
    }
  };

  // 인풋 밑줄포커스
  const handleFocus = (event) => {
    if (event.target.type === 'email') {
      setEmailFocus(true);
      setPwFocus(false);
    } else if (event.target.type === 'password') {
      setEmailFocus(false);
      setPwFocus(true);
    }
  };

  // 버튼 활성화
  useEffect(() => {
    setDisabled(!(email && isValidValues.email && password && isValidValues.password));
  }, [email, password, isValidValues.password]);

  // 로그인 통신
  const handleSubmit = (event) => {
    event.preventDefault();
    const promise = loginAPI(email, password);
    promise
      .then((res) => {
        if (res.user) {
          const userInfo = { id: res.user._id, accountname: res.user.accountname, username: res.user.username, userimg: res.user.image };
          localStorage.setItem('oguUserInfo', JSON.stringify(userInfo));
          localStorage.setItem('oguToken', res.user.token);
          navigate(from);
        } else {
          // 이메일 및 비밀번호 오류 시 에러메세지 발생
          const errMessage = res.message;
          setErrPwVisible(true);
          setLoginError(errMessage);
        }
      })
      .catch((error) => {
        console.error('에러 발생:', error);
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
            name="email"
            value={email}
            placeholder="이메일 주소를 입력해 주세요."
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></EmailInput>
          <Line $emailFocus={emailFocus}></Line>
          {errEmailVisible && (!email || errorMessage.email) && <ErrMsg>*{errorMessage.email}</ErrMsg>}

          <Label htmlFor="user-pw">비밀번호</Label>
          <PwInput
            type="password"
            id="user-pw"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해 주세요."
            autoComplete="current-password"
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></PwInput>
          <Line $pwFocus={pwFocus}></Line>
          {errPwVisible && !isValidValues.password ? (
            <ErrMsg> *{errorMessage.password}</ErrMsg>
          ) : errPwVisible && loginError ? (
            <ErrMsg> *{loginError}</ErrMsg>
          ) : null}
        </form>
        <Button size="lg" vari="basic" text="로그인" type="submit" onClick={handleSubmit} disabled={disabled} />
        <Join onClick={handleSignUpClick}>이메일로 회원가입</Join>
      </Container>
    </>
  );
}
