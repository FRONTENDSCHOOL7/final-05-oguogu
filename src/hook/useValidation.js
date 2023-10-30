import React, { useState } from 'react';

export function useValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [errMsgVisible, setErrMsgVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');

  const validateLogin = () => {
    if (!email || !password) {
      setLoginError('*이메일과 비밀번호를 모두 입력해주세요.');
      setErrMsgVisible(true);
    } else {
      setErrMsgVisible(false);
    }
  };

  const validateJoin = () => {
    if (!username || !accountname || !intro) {
      setLoginError('*사용자이름, 계정ID, 소개글을 모두 입력해주세요.');
      setErrMsgVisible(true);
    } else {
      setErrMsgVisible(false);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    loginError,
    validateLogin,
    validateJoin,
    errMsgVisible,
    setErrMsgVisible,
    username,
    setUsername,
    accountname,
    setAccountname,
    intro,
    setIntro,
  };
}
