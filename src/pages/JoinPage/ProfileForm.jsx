import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageWrap, ChangeImg } from 'pages/JoinPage/ProfileForm.style';
import { Container, Label, Input, Line, ErrMsg } from 'pages/JoinPage/EmailPwPage.style';
import Button from 'components/common/button/Button';
import iconPicture from 'assets/images/icon_picture.png';
import { useValidation } from 'hook/useValidation';
import { useRecoilValue } from 'recoil';
import { emailState, passwordState } from 'atoms/userInfo';
import { joinAPI } from 'api/join.api';
import { imgUploadAPI } from 'api/image.api';

export default function ProfileForm() {
  const navigate = useNavigate();

  const { loginError, validateJoin, errMsgVisible, setErrMsgVisible, username, setUsername, accountname, setAccountname, intro, setIntro } = useValidation();
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(passwordState);

  const [disabled, setDisabled] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [accountnameFocus, setAccountnameFocus] = useState(false);
  const [introFocus, setIntroFocus] = useState(false);
  const [image, setImage] = useState('https://api.mandarin.weniv.co.kr/1698652522939.png');

  const handleImgUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const newImage = event.target.result;
        setImage(newImage);

        // 이미지를 로컬 스토리지에 저장 (Base64로 인코딩)
        localStorage.setItem('userImage', newImage);

        // 이미지 업로드 API 호출 (Header에서 직접 호출)
        try {
          const imgUploadResult = await imgUploadAPI(file);
          localStorage.setItem('uploadedImage', imgUploadResult);
        } catch (error) {
          console.error('이미지 업로드 실패:', error);
        }
      };

      reader.readAsDataURL(file);
    }
  };

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
      const userInfo = { id: res.user._id, accountname: res.user.accountname, username: res.user.username, userimg: res.user.image };
      localStorage.setItem('oguUserInfo', JSON.stringify(userInfo));
      navigate('/login');
      console.log(res);
    });
  };

  return (
    <>
      <ImageWrap>
        <img src={image} />
      </ImageWrap>
      {!image && (
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
