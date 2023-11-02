import { useCallback, useState, useEffect } from 'react';
import { USER_REG, USER_WARNING_MSG, PROFILE_REG, PROFILE_WARNING_MSG } from '../constants/validate';
import { useRecoilState } from 'recoil';
import { emailState, passwordState } from 'atoms/userInfo';

export default function useUserForm() {
  // 이메일, 비밀번호 값을 받아옴
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');

  // 에러 메시지
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    username: '',
    accountname: '',
  });

  // 이메일, 비밀번호 유효성 결과
  const [isValidValues, setIsValidValues] = useState({
    email: false,
    password: false,
    username: false,
    accountname: false,
  });

  // 이메일, 비밀번호 입력값 받아오기
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      } else if (name === 'username') {
        setUsername(value);
      } else if (name === 'accountname') {
        setAccountname(value);
      }
      setErrorMessage({ email: '', password: '' });
    },
    [email, password, username, accountname, errorMessage]
  );

  const handleSetErrorMessage = useCallback(() => {
    // 입력한 값이 없을 때 || 유효하지 않은 값일 때
    console.log(username);
    setErrorMessage({
      email: (!email && USER_WARNING_MSG.email.require) || (!isValidValues.email && USER_WARNING_MSG.email.format),
      password: (!password && USER_WARNING_MSG.password.require) || (!isValidValues.password && USER_WARNING_MSG.password.format),
      username: (!username && PROFILE_WARNING_MSG.username.require) || (!isValidValues.username && PROFILE_WARNING_MSG.username.format),
      accountname: (!accountname && PROFILE_WARNING_MSG.accountname.require) || (!isValidValues.accountname && PROFILE_WARNING_MSG.accountname.format),
    });
  }, [email, password, username, accountname, isValidValues]);

  useEffect(() => {
    // 여기에서 유효성 검사를 수행하고 isValidValues 업데이트
    const emailIsValid = USER_REG.email.test(email);
    const passwordIsValid = USER_REG.password.test(password);
    const usernameIsValid = PROFILE_REG.username.test(username);
    const accountnameIsValid = PROFILE_REG.accountname.test(accountname);

    setIsValidValues({
      email: emailIsValid,
      password: passwordIsValid,
      username: usernameIsValid,
      accountname: accountnameIsValid,
    });
  }, [email, password, username, accountname]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    accountname,
    setAccountname,
    isValidValues,
    errorMessage,
    handleSetErrorMessage,
    handleChange,
  };
}
