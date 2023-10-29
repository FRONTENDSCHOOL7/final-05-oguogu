import React from 'react';
import { Label, Input, Line, ErrMsg } from 'pages/JoinPage/EmailPwPage.style';

export default function EmailPwPage({ email, password, loginError, errMsgVisible, handleData, handleBlur, handleFocus, handleSubmit, emailFocus, pwFocus }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
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
      </form>

      {errMsgVisible && loginError && <ErrMsg>{loginError}</ErrMsg>}
    </>
  );
}
