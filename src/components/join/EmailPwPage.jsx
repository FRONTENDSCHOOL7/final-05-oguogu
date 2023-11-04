import React, { useState } from 'react';
import { Label, Input, Line, ErrMsg } from 'components/join/EmailPwPage.style';
import useUserForm from 'hook/useUserForm';
import { emailValidAPI } from 'api/join.api';

export default function EmailPwPage({ dupeErrVisible, handleDupeErrVisible }) {
  const { email, password, handleChange, isValidValues, handleSetErrorMessage, errorMessage } = useUserForm();
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [errEmailVisible, setErrEmailVisible] = useState(false);
  const [errPwVisible, setErrPwVisible] = useState(false);
  const [emailDupeError, setEmailDupeError] = useState('');
  // dupeErrVisible이 false 때 : 사용 가능한 이메일
  // dupeErrVisible이 true 때 : 중복 가입상태

  // 인풋값 발생
  const handleData = (event) => {
    handleChange(event);
    setErrEmailVisible(false);
    setErrPwVisible(false);
    setEmailDupeError('');
    // emailDupeError, dupeErrVisible이 동시에 true가 되어버린 후 false로 바뀌지않아 '다음'버튼과 에러메시지가 제대로 동작하지 않는 버그 발생. emailDupeError를 초기화(false)함으로써 버그 수정. dupeErrvisible을 false로 바꾸면, JoinPage에 true값이 전달되지 않음
  };

  // 인풋값 에러메시지
  const handleBlur = async (event) => {
    handleSetErrorMessage();
    await emailValidAPI(email)
      .then((result) => {
        if (result.message === '사용 가능한 이메일 입니다.') {
          handleDupeErrVisible(false);
          setEmailDupeError('');
        } else if (result.message === '이미 가입된 이메일 주소 입니다.') {
          setEmailDupeError(result.message);
          handleDupeErrVisible(true);
        }
      })
      .catch((error) => {
        console.log('실패시', error.message);
      });

    const errMsg = async () => {
      if (event.target.type === 'email') {
        if (!emailDupeError) {
          setErrEmailVisible(true);
          setErrPwVisible(false);
        } else if (emailDupeError) {
          handleDupeErrVisible(true);
          setErrPwVisible(false);
        }
      } else if (event.target.type === 'password') {
        setErrPwVisible(true);
        setErrEmailVisible(false);
      }
    };

    await errMsg();
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
      {dupeErrVisible && emailDupeError && <ErrMsg>*{emailDupeError}</ErrMsg>}
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
