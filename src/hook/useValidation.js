import React, { useState } from 'react';

export function useValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [errMsgVisible, setErrMsgVisible] = useState(false);

  const validateLogin = () => {
    if (!email || !password) {
      setLoginError('*이메일과 비밀번호를 모두 입력해주세요.');
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
    setLoginError,
    validateLogin,
    errMsgVisible,
    setErrMsgVisible,
  };
}
