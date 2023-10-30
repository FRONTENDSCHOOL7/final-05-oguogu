import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { emailState, passwordState } from 'atoms/userInfo';
import { Label, Input, Line } from 'pages/JoinPage/EmailPwPage.style';
import { useValidation } from 'hook/useValidation';

export default function EmailPwPage() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const { validateLogin, setErrMsgVisible } = useValidation();
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

  return (
    <>
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
    </>
  );
}
