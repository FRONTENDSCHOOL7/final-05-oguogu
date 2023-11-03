import React, { useState } from 'react';
import { Image, ChangeBtn } from 'components/join/ProfileForm.style';
import { Container, Label, Input, Line, ErrMsg } from 'components/join/EmailPwPage.style';
import iconPicture from 'assets/images/icon_picture.png';
import { accountValidAPI } from 'api/join.api';
import { imgUploadAPI } from 'api/image.api';
import useUserForm from 'hook/useUserForm';
import { ImageWrap } from 'pages/JoinPage/ProfileForm.style';

export default function ProfileForm({ handleSubmit, idDupeErrMsg, setIdDupeErrMsg, intro, setIntro, image, setImage, updateProfileInfo }) {
  const { handleSetErrorMessage, errorMessage, setUsername, username, setAccountname, accountname } = useUserForm();

  const [usernameFocus, setUsernameFocus] = useState(false);
  const [accountnameFocus, setAccountnameFocus] = useState(false);
  const [introFocus, setIntroFocus] = useState(false);
  const [errUsernameVisible, setErrUsernameVisible] = useState(false);
  const [errAccountnameVisible, setErrAccountnameVisible] = useState(false);

  const handleUpdate = () => {
    // 콜백 함수를 사용하여 변경된 상태를 부모 컴포넌트에 전달
    updateProfileInfo(username, accountname);
  };

  console.log(errorMessage);
  // 미리보기만 해놓고 실제로 호출하는건 오구오구시작하기 버튼 눌렀을 때로
  // 프로필사진 업로드
  const handleImgUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const newImage = event.target.result;
        setImage(newImage);

        // 이미지 업로드 API 호출 (Header에서 직접 호출)
        try {
          const imgUploadResult = await imgUploadAPI(file);
          setImage(imgUploadResult);
        } catch (error) {
          console.error('이미지 업로드 실패:', error);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleData = (event) => {
    setIdDupeErrMsg(''); //accountname 에러 두줄 생김 방지를 위한 동기화
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
  const handleBlur = async (event) => {
    setUsernameFocus(false);
    setAccountnameFocus(false);
    setIntroFocus(false);
    handleSetErrorMessage();
    handleUpdate(event);

    // accountname 중복검사
    await accountValidAPI(accountname)
      .then((result) => {
        if (result.message === '이미 가입된 계정ID 입니다.') {
          const errmsg = result.message;
          setIdDupeErrMsg(errmsg);
        }
      })
      .catch((error) => {
        console.log('실패시', error.message);
      });

    // 유효성검사 에러메시지
    const errMsgVisible = async () => {
      if (event.target.id === 'username') {
        setErrUsernameVisible(true);
        setErrAccountnameVisible(false);
      } else if (event.target.id === 'accountname') {
        setErrAccountnameVisible(true);
        setErrUsernameVisible(false);
      }
    };

    await errMsgVisible();
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

  return (
    <>
      <ImageWrap>
        <Image $img={image} />
      </ImageWrap>
      {image && (
        <ChangeBtn htmlFor="chooseImg">
          <img src={iconPicture} alt="이미지업로드" />
        </ChangeBtn>
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
          {errAccountnameVisible && errorMessage.accountname && <ErrMsg>*{errorMessage.accountname}</ErrMsg>}
          {idDupeErrMsg && <ErrMsg>*{idDupeErrMsg}</ErrMsg>}

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
        </form>
      </Container>
    </>
  );
}
