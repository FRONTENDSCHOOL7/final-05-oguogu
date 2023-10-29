import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ImageWrap, ChangeImg } from 'pages/JoinPage/ProfileForm.style';
import { Container, Label, Input, Line, ErrMsg } from 'pages/JoinPage/EmailPwPage.style';
import Button from 'components/common/button/Button';
import iconPicture from 'assets/images/icon_picture.png';
import { useValidation } from 'hook/useValidation';
import { joinAPI } from 'api/join.api';
import { imgUploadAPI } from 'api/image.api';

export default function ProfileForm({ text, subText }) {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImgUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const newImage = event.target.result;
        setImageSrc(newImage);

        // 이미지를 로컬 스토리지에 저장 (Base64로 인코딩)
        localStorage.setItem('userImage', newImage);

        // 이미지 업로드 API 호출 (Header에서 직접 호출)
        try {
          const imgUploadResult = await imgUploadAPI(file);
          localStorage.setItem('uploadedImage', imgUploadResult.filename);
        } catch (error) {
          console.error('이미지 업로드 실패:', error);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/home';

  const { loginError, validateJoin, errMsgVisible, setErrMsgVisible, username, setUsername, accountname, setAccountname, intro, setIntro } = useValidation();

  const [disabled, setDisabled] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [accountnameFocus, setAccountnameFocus] = useState(false);
  const [introFocus, setIntroFocus] = useState(false);

  // 로컬 스토리지에서 email과 password 가져오기
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  const image = localStorage.getItem('uploadedImage');

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

    const promise = joinAPI({ username, email, password, accountname, intro, image });
    promise.then((res) => {
      localStorage.setItem('oguToken', res.token);
      navigate(from);
    });
  };

  return (
    <>
      <ImageWrap>
        <img src={imageSrc} />
      </ImageWrap>
      {!imageSrc && (
        <ChangeImg htmlFor="chooseImg">
          <img src={iconPicture} alt="이미지업로드" />
        </ChangeImg>
      )}
      <input type="file" id="chooseImg" name="chooseImg" accept="image/*" onChange={handleImgUpload} style={{ display: 'none' }} />

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
