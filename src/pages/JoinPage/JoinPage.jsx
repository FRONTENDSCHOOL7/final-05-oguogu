import React, { useState, useEffect } from 'react';
import EmailPwPage from './EmailPwPage';
import Header from 'components/login/Header';
import { Container } from 'pages/JoinPage/EmailPwPage.style';
import ProfileSettingPage from './ProfileSettingPage';
import Button from 'components/common/button/Button';
import { useValidation } from 'hook/useValidation';

export default function JoinPage() {
  const { email, password, setEmail, setPassword, loginError, validateLogin, errMsgVisible, setErrMsgVisible } = useValidation();
  const [emailPwPageVisible, setEmailPwPageVisible] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [disabled, setDisabled] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailPwPageVisible) {
      // EmailPwPage가 보이는 상태에서 버튼을 클릭한 경우
      if (email && password) {
        // 이메일 및 비밀번호 정보가 입력되었을 때
        validateLogin();
        setEmailPwPageVisible(false); // EmailPwPage를 숨기고
      } else {
        // 이메일 및 비밀번호 정보가 입력되지 않았을 때
        setErrMsgVisible(true);
      }
    } else {
      // ProfileSettingPage가 보이는 상태에서 버튼을 클릭한 경우
      // 이곳에서 추가적인 로직 수행 가능
    }
  };

  useEffect(() => {
    setDisabled(!(email && password));
  }, [email, password, loginError]);

  return (
    <>
      {emailPwPageVisible && <Header text="이메일로 회원가입" />}
      {emailPwPageVisible && (
        <Container>
          <EmailPwPage
            email={email}
            password={password}
            emailFocus={emailFocus}
            pwFocus={pwFocus}
            setEmail={setEmail}
            setPassword={setPassword}
            loginError={loginError}
            validateLogin={validateLogin}
            errMsgVisible={errMsgVisible}
            setErrMsgVisible={setErrMsgVisible}
            handleData={handleData}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleSubmit={handleSubmit}
          />
          <Button size="lg" vari="basic" text={'다음'} type="submit" onClick={handleSubmit} disabled={disabled} />
        </Container>
      )}
      {!emailPwPageVisible && <ProfileSettingPage />}
    </>
  );
}
