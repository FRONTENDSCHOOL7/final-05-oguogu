import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/publicRoute/Header';
import Button from 'components/common/button/Button';
import { Container, Label, Input, Line, ErrMsg } from 'components/publicRoute/PublicRoutePage.style';
import { useValidation } from 'hook/useValidation';

export default function ProfileSettingPage() {
  const isProfileSetting = true;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/home';

  const { loginError, validateJoin, errMsgVisible, setErrMsgVisible, username, setUsername, accountname, setAccountname, intro, setIntro } = useValidation();

  const [disabled, setDisabled] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [accountnameFocus, setAccountnameFocus] = useState(false);
  const [introFocus, setIntroFocus] = useState(false);

  const handleData = (event) => {
    switch (event.target.id) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'accountname':
        setAccountname(event.target.value);
        break;
      case 'intro':
        setIntro(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleBlur = (event) => {
    switch (event.target.id) {
      case 'username':
        setUsernameFocus(false);
        break;
      case 'accountname':
        setAccountnameFocus(false);
        break;
      case 'intro':
        setIntroFocus(false);
        break;

      default:
        break;
    }
    if (!username || !accountname || !intro) {
      setErrMsgVisible(true);
    }
    validateJoin();
  };

  const handleFocus = (event) => {
    switch (event.target.id) {
      case 'username':
        setUsernameFocus(true);
        break;
      case 'accountname':
        setAccountnameFocus(true);
        break;
      case 'intro':
        setIntroFocus(true);
        break;
      default:
        break;
    }
    setErrMsgVisible(false);
  };

  useEffect(() => {
    setDisabled(!(username && accountname && intro));
  }, [username, accountname, intro]);

  const handleSubmit = (event) => {
    event.preventDefault();
    validateJoin();
    navigate(from);
  };

  return (
    <>
      <Header isProfileSetting={isProfileSetting} text="프로필 설정" subText="나중에 언제든지 변경할 수 있습니다." />
      <Container>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="username">사용자 이름</Label>
          <Input
            type="text"
            id="username"
            value={username}
            placeholder="사용자 이름을 입력해 주세요."
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></Input>
          <Line $usernameFocus={usernameFocus}></Line>

          <Label htmlFor="accountname">계정 ID</Label>
          <Input
            type="text"
            id="accountname"
            value={accountname}
            placeholder="계정ID를 입력해 주세요."
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></Input>
          <Line $accountnameFocus={accountnameFocus}></Line>

          <Label htmlFor="intro">소개</Label>
          <Input
            type="text"
            id="intro"
            value={intro}
            placeholder="자기소개를 입력해 주세요."
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></Input>
          <Line $introFocus={introFocus}></Line>
        </form>
        <Button size="lg" vari="basic" text="오구오구 시작하기" type="submit" onClick={handleSubmit} disabled={disabled} />
        {errMsgVisible && loginError && <ErrMsg>{loginError}</ErrMsg>}
      </Container>
    </>
  );
}
