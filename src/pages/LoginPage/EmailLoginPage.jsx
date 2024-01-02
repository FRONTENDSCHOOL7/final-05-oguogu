import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/login/Header';
import Button from 'components/common/button/Button';
import { Container, Label, EmailInput, PwInput, Line, Join, ErrMsg } from 'pages/LoginPage/EmailLoginPage.style';
import { loginAPI } from 'api/login.api';
import useUserForm from 'hook/useUserForm';

export default function EmailLoginPage() {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
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
        console.log(res);
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
        <Loginform />
        <Join onClick={handleSignUpClick}>이메일로 회원가입</Join>
      </Container>
    </>
  );
}
