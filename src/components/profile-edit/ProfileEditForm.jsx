import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { EditMyInfoAPI } from 'api/profile.api';
import { accountValidAPI } from 'api/join.api';
import { imgUploadAPI } from 'api/image.api';
import Header from 'components/common/header/Header';
import DefaultProfileInput from 'assets/images/icon_ogudog_gray.png';
import Input from 'components/common/input/Input';
import {
  Container,
  StyledInputWrap,
  ImageFormContainer,
  InputImage,
  StyledProfileImg,
  ProfileInputImgButton,
} from 'components/profile-edit/ProfileEditForm.style';

export default function ProfileEditForm({ userInfo }) {
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });
  const [error, setErrors] = useState([]);
  const [hasError, setHasError] = useState(false);
  const token = localStorage.getItem('oguToken');
  const [profileImg, setProfileImg] = useState(null);

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [isImageChanged, setImageChanged] = useState(false);

  // useForm 훅에서 제공하는 setValue함수를 사용하여 폼 필드의 초기값 설정
  useEffect(() => {
    setValue('image', userInfo?.image || DefaultProfileInput);
    setValue('username', userInfo?.username || null);
    setValue('accountname', userInfo?.accountname || null);
    setValue('intro', userInfo?.intro || null);
    // 의존성 배열 경고를 무시하기 위한 코드조각
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  // accountname 변경
  const checkUserIdValid = (newAccount, oldAccount) => {
    if (newAccount === oldAccount) {
      return true;
    } else {
      const promise = accountValidAPI(newAccount);
      clearErrors('accountname');
      return promise
        .then((res) => {
          if (res.message === '이미 가입된 계정ID 입니다.') {
            setHasError(true);
            return '*이미 사용 중인 ID입니다.';
          } else {
            setHasError(false);
            clearErrors('accountname');
            return true;
          }
        })
        .catch((error) => {
          alert('에러 발생: ' + error.message);
          return false;
        });
    }
  };

  // 프로필 이미지 변경
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    try {
      const imgUrl = await imgUploadAPI(file);
      if (imgUrl && !imgUrl.endsWith('undefined')) {
        setProfileImg(imgUrl);
        setImageChanged(true);
      } else if (imgUrl.endsWith('undefined')) {
        setProfileImg(DefaultProfileInput);
      }
    } catch (error) {
      console.error('Image upload failed:', error.message);
    }
  };

  // 프로필 수정저장
  const handleSubmitData = async (formData) => {
    formData.image = profileImg || userInfo?.image;
    const promise = EditMyInfoAPI(formData, token);
    promise
      .then((res) => {
        const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
        const newUserInfo = { ...userInfo, accountname: res.user.accountname, username: res.user.username, image: res.user.image };
        localStorage.setItem('oguUserInfo', JSON.stringify(newUserInfo));

        navigate(`/profile/${res.user.accountname}`, { replace: true });
      })
      .catch((error) => {
        console.log('프로필 수정에 실패했습니다.', error);
      });
  };

  const handleFieldChange = () => {
    setErrors({});
  };

  return (
    <>
      <Header type="btn" btnText="저장" btndisabled={!isValid && !isImageChanged} rightOnClick={handleSubmit(handleSubmitData)} />
      <Container>
        <form
          onSubmit={handleSubmit((formData) => {
            setHasError(false);
            handleSubmitData(formData);
          })}
        >
          <ImageFormContainer>
            <label>
              <InputImage id="profileImg" type="file" accept="image/jpg, image/jpeg, image/png" ref={inputRef} onChange={handleImageChange} />
            </label>
            <ProfileInputImgButton title="클릭하면 이미지를 불러올 수 있어요." type="button" onClick={() => inputRef.current.click()}>
              <StyledProfileImg src={profileImg || userInfo?.image || DefaultProfileInput} alt="기본 프로필" />
            </ProfileInputImgButton>
          </ImageFormContainer>

          <StyledInputWrap>
            <Input
              label="사용자이름"
              id="username"
              type="text"
              placeholder="2~10자 이내로 작성 부탁드릴게요."
              onChange={handleFieldChange}
              hasError={hasError}
              registerOptions={{
                ...register('username', {
                  required: '*계정이름은 필수 입력입니다',
                  minLength: {
                    value: 2,
                    message: '*사용자 이름은 최소 2자 이상이어야 합니다.',
                  },
                  maxLength: {
                    value: 10,
                    message: '*사용자 이름은 최대 10자까지 허용됩니다.',
                  },
                }),
                errors: errors.username ? { username: errors.username } : error,
              }}
            />
          </StyledInputWrap>

          <StyledInputWrap>
            <Input
              label="계정 ID"
              id="accountname"
              type="text"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능해요."
              onChange={handleFieldChange}
              hasError={hasError}
              registerOptions={{
                ...register('accountname', {
                  required: '*계정ID는 필수 입력입니다',
                  pattern: {
                    value: /^[0-9a-zA-Z._]+$/,
                    message: '*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
                  },
                  validate: {
                    uniqueAccount: async (value) => {
                      const result = await checkUserIdValid(value, userInfo?.accountname);
                      return result === true || result;
                    },
                  },
                }),
                errors: errors.accountname ? { accountname: errors.accountname } : error,
              }}
            />
          </StyledInputWrap>

          <Input
            label="소개"
            id="intro"
            type="text"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            onChange={handleFieldChange}
            hasError={hasError}
            registerOptions={{
              ...register('intro', {
                required: '*간단한 소개 부탁드릴게요!',
              }),
              errors: errors.intro ? { intro: errors.intro } : error,
            }}
          />
        </form>
      </Container>
    </>
  );
}
