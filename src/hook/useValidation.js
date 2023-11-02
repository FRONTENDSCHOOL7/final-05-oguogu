import { useState } from 'react';
import { USER_WARNING_MSG } from '../constants/validate';
import useUserForm from './useUserForm';
import { useRecoilValue } from 'recoil';
import { emailState, passwordState } from 'atoms/userInfo';

export function useValidation() {
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(passwordState);
  const [errorMessage, setErrorMessage] = useState('');
  const { isValidValues } = useUserForm();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [errMsgVisible, setErrMsgVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');

  // handleSetErrorMessage 로 교체
  const validateLogin = (event) => {
    const type = event.target.type;
    if (event.target.type) {
      switch (type) {
        case 'email':
          setEmailError(USER_WARNING_MSG.email.require);
          setPasswordError('');
          break;
        case 'password':
          setEmailError('');
          setPasswordError(USER_WARNING_MSG.password.require);
          break;
        default:
          setEmailError('');
          setPasswordError('');
      }
    }
  };

  // const validateLogin = () => {
  //   if (!email || !password) {
  //     setLoginError('*이메일과 비밀번호를 모두 입력해주세요.');
  //     setErrMsgVisible(true);
  //   } else {
  //     setErrMsgVisible(false);
  //   }
  // };

  const validateJoin = (event) => {
    const type = event.target.type;
    if (event.target.type) {
      switch (type) {
        case 'email':
          if (email) {
            setErrorMessage(USER_WARNING_MSG.email.require);
          } else if (!isValidValues.email) {
            setErrorMessage(USER_WARNING_MSG.email.format);
          } else {
            setErrorMessage('');
          }
          break;
        case 'password':
          if (password) {
            setErrorMessage(USER_WARNING_MSG.password.require);
          } else if (!isValidValues.password) {
            setErrorMessage(USER_WARNING_MSG.password.format);
          } else {
            setErrorMessage('');
          }
          break;
        default:
      }
    }
  };

  // const validateJoin = () => {
  //   if (!username || !accountname || !intro) {
  //     setLoginError('*사용자이름, 계정ID, 소개글을 모두 입력해주세요.');
  //     setErrMsgVisible(true);
  //   } else {
  //     setErrMsgVisible(false);
  //   }
  // };

  return {
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    validateJoin,
    validateLogin,
    errorMessage,
    setErrorMessage,
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
