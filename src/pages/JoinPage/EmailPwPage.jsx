import React, { useState, useEffect } from 'react';
import { Label, Input, Line, ErrMsg } from 'pages/JoinPage/EmailPwPage.style';
import { useMutation } from 'react-query';
import useUserForm from 'hook/useUserForm';
import { emailValidAPI } from 'api/join.api';

export default function EmailPwPage({ dupeErrVisible, handleDupeErrVisible }) {
  const { email, password, handleChange, isValidValues, handleSetErrorMessage, errorMessage } = useUserForm();
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [errEmailVisible, setErrEmailVisible] = useState(false);
  const [errPwVisible, setErrPwVisible] = useState(false);
  const [emailDupeError, setEmailDupeError] = useState('');

  // 인풋값 발생
  const handleData = (event) => {
    handleChange(event);
    setErrEmailVisible(false);
    setErrPwVisible(false);
    // console.log('인풋값발생시', dupeErrVisible);
  };

  //이메일 중복 검사
  const emailMutation = useMutation(emailValidAPI, {
    onSuccess: (result) => {
      if (result.message === '사용 가능한 이메일 입니다.') {
        console.log('성공시:', result.message);
        handleDupeErrVisible(true);
        setEmailDupeError('');
      } else if (result.message === '이미 가입된 이메일 주소 입니다.') {
        console.log('중복가입', result.message);
        setEmailDupeError(result.message);
        handleDupeErrVisible(false);
      }
    },
    onError: (error) => {
      console.log('실패시', error.message);
    },
  });

  // JoinPage에 전달
  useEffect(
    (value) => {
      if (!dupeErrVisible) {
        // dupeErrVisible이 false일 때 부모 컴포넌트로 콜백 함수를 호출하여 알림
        handleDupeErrVisible(value);
      }
    },
    [dupeErrVisible, handleDupeErrVisible]
  );

  // 인풋값 에러메시지
  const handleBlur = (event) => {
    handleSetErrorMessage();
    emailMutation.mutate(email);
    console.log('handleBlur', dupeErrVisible);

    if (event.target.type === 'email') {
      if (!emailDupeError) {
        setErrEmailVisible(true);
        setEmailFocus(true);
        setErrPwVisible(false);
      } else if (emailDupeError) {
        handleDupeErrVisible(true);
        setEmailFocus(true);
        setErrPwVisible(false);
      }
    } else if (event.target.type === 'password') {
      setErrPwVisible(true);
      setPwFocus(true);
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
    setErrEmailVisible(false);
    setErrPwVisible(false);
  };

  return (
    <>
      <Label htmlFor="user-email">이메일</Label>
      <Input
        type="email"
        name="email"
        id="user-email"
        value={email}
        placeholder="이메일 주소를 입력해 주세요."
        required
        onChange={handleData}
        onBlur={handleBlur}
        onFocus={handleFocus}
      ></Input>
      <Line $emailFocus={emailFocus}></Line>
      {errEmailVisible && (!email || errorMessage.email) && <ErrMsg>*{errorMessage.email}</ErrMsg>}
      {!dupeErrVisible && emailDupeError && <ErrMsg>{emailDupeError}</ErrMsg>}
      <Label htmlFor="user-pw">비밀번호</Label>
      <Input
        type="password"
        name="password"
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
      {errPwVisible && !isValidValues.password && <ErrMsg> *{errorMessage.password}</ErrMsg>}
    </>
  );
}
