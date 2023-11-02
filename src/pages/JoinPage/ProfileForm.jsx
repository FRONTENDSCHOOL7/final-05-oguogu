import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ImageWrap, ChangeImg } from 'pages/JoinPage/ProfileForm.style';
import { Container, Label, Input, Line, ErrMsg } from 'pages/JoinPage/EmailPwPage.style';
import Button from 'components/common/button/Button';
import iconPicture from 'assets/images/icon_picture.png';
import { joinAPI, accountValidAPI } from 'api/join.api';
import { imgUploadAPI } from 'api/image.api';
import useUserForm from 'hook/useUserForm';

export default function ProfileForm() {
  const navigate = useNavigate();

  const { email, password, username, setUsername, accountname, setAccountname, isValidValues, handleChange, handleSetErrorMessage, errorMessage } =
    useUserForm();
  const [image, setImage] = useState('https://api.mandarin.weniv.co.kr/1698652522939.png');
  const [intro, setIntro] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [accountnameFocus, setAccountnameFocus] = useState(false);
  const [introFocus, setIntroFocus] = useState(false);
  const [errUsernameVisible, setErrUsernameVisible] = useState(false);
  const [errAccountnameVisible, setErrAccountnameVisible] = useState(false);
  const [joinError, setJoinError] = useState('');

  // 프로필사진 업로드
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

  //accountname 계정ID 중복검사
  const idMutation = useMutation(accountValidAPI, {
    onSuccess: (result) => {
      if (result.message === '사용 가능한 계정ID 입니다.') {
        console.log('사용가능ID', result.message);
      } else if (result.message === '이미 가입된 계정ID 입니다.') {
        console.log('중복가입ID', result.message);
      } else {
        console.log(result.message);
      }
    },
    onError: (error) => {
      console.log('실패시', error.message);
      console.error(error);
    },
  });

  const handleData = (event) => {
    const value = event.target.value;
    switch (event.target.id) {
      case 'username':
        setUsername(value);
        break;
      case 'accountname':
        setAccountname(value);
        break;
      case 'intro':
        setIntro(value);
        break;
      default:
        break;
    }
  };

  // 인풋값 에러메시지
  const handleBlur = (event) => {
    console.log('핸들블러동작');
    setUsernameFocus(false);
    setAccountnameFocus(false);
    setIntroFocus(false);
    handleSetErrorMessage();

    if (event.target.id === 'username') {
      setErrUsernameVisible(true);
      setErrAccountnameVisible(false);
    } else if (event.target.id === 'accountname') {
      setErrAccountnameVisible(true);
      setErrUsernameVisible(false);
    }
  };

  // 인풋값 밑줄포커스
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
  };

  useEffect(() => {
    setDisabled(!(username && accountname && intro));
  }, [username, accountname, intro]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const promise = joinAPI({ username, email, password, accountname, intro, image });

    console.log('통신후', accountname, username, intro, email, password);

    promise
      .then((res) => {
        if (res.user) {
          const userInfo = { id: res.user._id, accountname: res.user.accountname, username: res.user.username, userimg: res.user.image };
          localStorage.setItem('oguUserInfo', JSON.stringify(userInfo));
          navigate('/login');
          console.log(res);
        }
      })
      .catch((error) => {
        // 에러 핸들링
        if (error.response) {
          // 서버에서 응답을 받았지만 응답 상태 코드가 오류인 경우
          console.error('Server Error:', error.response.status, error.response.data);
          const errMessage = error.response.data.message;
          setJoinError(errMessage);
        } else {
          console.error('에러 발생:', error);
        }
      });
  };

  return (
    <>
      <ImageWrap>
        <img src={image} />
      </ImageWrap>
      {image && (
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
            name="username"
            value={username}
            placeholder="2~10자 이내여야 합니다."
            required
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></Input>
          <Line $usernameFocus={usernameFocus}></Line>
          {errUsernameVisible && (!username || errorMessage.username) && <ErrMsg>*{errorMessage.username}</ErrMsg>}

          <Label htmlFor="accountname">계정 ID</Label>
          <Input
            type="text"
            id="accountname"
            name="accountname"
            value={accountname}
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            onChange={handleData}
            onBlur={handleBlur}
            onFocus={handleFocus}
          ></Input>
          <Line $accountnameFocus={accountnameFocus}></Line>
          {errAccountnameVisible && (!accountname || errorMessage.accountname) && <ErrMsg>*{errorMessage.accountname}</ErrMsg>}

          <Label htmlFor="intro">소개</Label>
          <Input
            type="text"
            id="intro"
            value={intro}
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            required
            onChange={handleData}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></Input>
          <Line $introFocus={introFocus}></Line>
          {joinError && <ErrMsg>{joinError}</ErrMsg>}
        </form>
        <Button size="lg" vari="basic" text="오구오구 시작하기" type="submit" onClick={handleSubmit} disabled={disabled} />
      </Container>
    </>
  );
}
