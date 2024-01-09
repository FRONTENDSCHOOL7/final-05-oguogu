import React, { useState, useRef, useEffect } from 'react';
import Input from 'components/common/input/Input';
import { Container, ImageFormContainer, InputImage, ProfileInputImgButton, StyledProfileImg } from 'components/join/ProfileForm.style';
import Button from 'components/common/button/Button';
import { StyledInputWrap, StyledButtonWrap } from 'components/login/LoginForm.style';
import DefaultProfileInput from 'assets/images/icon_ogudog_gray.png';
import { accountValidAPI } from 'api/join.api';
import { joinAPI } from 'api/join.api';
import { imgUploadAPI } from 'api/image.api';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValue: {
      username: null,
      accountname: null,
      intro: null,
    },
  });

  const [error, setErrors] = useState({});
  const [hasError, setHasError] = useState(false);
  const [profileImg, setProfileImg] = useState(DefaultProfileInput);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (data) {
      setValue('email', data.email);
      setValue('password', data.password);
    }
    setValue('image', DefaultProfileInput);
    setValue('username', null);
    setValue('accountname', null);
    setValue('intro', null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const checkUserIdValid = (accountname) => {
    const promise = accountValidAPI(accountname);
    return promise
      .then((res) => {
        if (res.message === '이미 가입된 계정ID 입니다.') {
          setError('accountname', {
            message: '*이미 사용 중인 ID입니다.',
          });
          setHasError(true);
          return false;
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
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    try {
      const imgUrl = await imgUploadAPI(file);
      if (imgUrl && !imgUrl.endsWith('undefined')) {
        setProfileImg(imgUrl);
        setValue('image', imgUrl);
      } else {
        setProfileImg(DefaultProfileInput);
        setValue('image', DefaultProfileInput);
      }
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const handleSubmitData = async (formData) => {
    try {
      const isValidUserId = await checkUserIdValid(formData.accountname);
      let defaultImg = profileImg;
      if (defaultImg === null) {
        defaultImg = DefaultProfileInput;
      }
      if (isValidUserId) {
        await joinAPI(formData, data, defaultImg);
        navigate('/login', {
          state: {
            email: formData.email,
            password: formData.password,
          },
        });
      }
    } catch (errors) {
      console.error(errors);
    }
  };

  const handleFieldChange = () => {
    setErrors({});
  };

  return (
    <>
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
              <StyledProfileImg src={profileImg || DefaultProfileInput} alt="기본 프로필" $isDefault={profileImg === DefaultProfileInput} />
            </ProfileInputImgButton>
          </ImageFormContainer>

          <StyledInputWrap>
            <Input
              label="사용자이름"
              id="username"
              type="text"
              placeholder="2~10자 이내여야 합니다."
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
                      const result = await checkUserIdValid(value);
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

          <StyledButtonWrap>
            <Button size="lg" vari="basic" text="오구오구 시작하기" onClick={handleSubmit} type="submit" disabled={!isValid} />
          </StyledButtonWrap>
        </form>
      </Container>
    </>
  );
}
