import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import EmailPwPage from './EmailPwPage';
import Header from 'components/login/Header';
import { Container } from 'pages/JoinPage/EmailPwPage.style';
import ProfileSettingPage from './ProfileSettingPage';
import Button from 'components/common/button/Button';
import useUserForm from 'hook/useUserForm';
import { emailValidAPI } from 'api/join.api';

export default function JoinPage() {
  const { email, password, isValidValues } = useUserForm();
  const [disabled, setDisabled] = useState(true);
  const [emailPwPageVisible, setEmailPwPageVisible] = useState(false);
  const [dupeErrVisible, setDupeErrvisible] = useState(false);

  console.log('useEffect', dupeErrVisible);

  const handleDupeErrVisible = (value) => {
    setDupeErrvisible(value);
  };

  // 다음버튼 눌렀을 때
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailPwPageVisible) {
      // EmailPwPage가 보이는 상태에서 버튼을 클릭한 경우
      if (email && password && isValidValues.email && isValidValues.password && !dupeErrVisible) {
        // 이메일 및 비밀번호 정보가 입력되었을 때
        setEmailPwPageVisible(true);
        // EmailPwPage를 숨기고
      }
    }
  };

  //이메일 중복 검사
  // const emailMutation = useMutation(emailValidAPI, {
  //   onSuccess: (result) => {
  //     if (result.message === '사용 가능한 이메일 입니다.') {
  //       console.log('성공시:', result.message);
  //       setEmailPwPageVisible(true);
  //     } else if (result.message === '이미 가입된 이메일 주소 입니다.') {
  //       console.log('중복가입', result.message);
  //       setEmailPwPageVisible(false);
  //     }
  //   },
  //   onError: (error) => {
  //     console.log('실패시', error.message);
  //   },
  // });

  // 버튼 활성화
  useEffect(() => {
    setDisabled(!(email && password && isValidValues.email && isValidValues.password && dupeErrVisible));
  }, [email, password, isValidValues.password, isValidValues.email, dupeErrVisible]);

  return (
    <>
      {!emailPwPageVisible && <Header text="이메일로 회원가입" />}
      {!emailPwPageVisible && (
        <Container>
          <form onSubmit={handleSubmit}>
            <EmailPwPage dupeErrVisible={dupeErrVisible} handleDupeErrVisible={handleDupeErrVisible} />
          </form>

          <Button size="lg" vari="basic" text="다음" type="submit" onClick={handleSubmit} disabled={disabled} />
        </Container>
      )}
      {emailPwPageVisible && <ProfileSettingPage />}
    </>
  );
}
