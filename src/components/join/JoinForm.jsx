import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from 'components/common/button/Button';
import Input from 'components/common/input/Input';
import { StyledInputWrap, StyledButtonWrap } from 'components/login/LoginForm.style';
import { emailValidAPI } from 'api/join.api';

export default function JoinForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const [error, setErrors] = useState({});

  const checkEmailValid = (email) => {
    const promise = emailValidAPI(email);
    return promise
      .then((res) => {
        if (res.message === '이미 가입된 이메일 주소 입니다.') {
          setError('email', {
            message: '*이미 가입된 이메일 주소 입니다. ',
          });
          setHasError(true);
          return false;
        } else {
          setHasError(false);
          clearErrors('email');
          return true;
        }
      })
      .catch((error) => {
        alert('에러 발생: ' + error.message);
        return false;
      });
  };

  const handleSubmitData = async (data) => {
    try {
      const isValidEmail = await checkEmailValid(data.email);
      if (isValidEmail) {
        navigate('./profile', {
          state: {
            email: data.email,
            password: data.password,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFieldChange = () => {
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setHasError(false);
        handleSubmitData(data);
      })}
    >
      <StyledInputWrap>
        <Input
          label="이메일"
          id="email"
          type="email"
          placeholder="이메일 주소를 입력해 주세요."
          onChange={handleFieldChange}
          hasError={hasError}
          registerOptions={{
            ...register('email', {
              required: '*이메일은 필수 입력 값이에요.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '*잘못된 이메일 형식입니다.',
              },
            }),
            errors: errors.email ? { email: errors.email } : error,
          }}
        />
      </StyledInputWrap>
      <StyledInputWrap>
        <Input
          label="비밀번호"
          id="password"
          type="password"
          placeholder="비밀번호를 설정해 주세요."
          onChange={handleFieldChange}
          hasError={hasError}
          registerOptions={{
            ...register('password', {
              required: '*비밀번호는 필수 입력 값이에요.',
              minLength: {
                value: 6,
                message: '*비밀번호는 6자 이상이어야 합니다.',
              },
            }),
            errors,
          }}
        />
      </StyledInputWrap>
      <StyledButtonWrap>
        <Button size="lg" vari="basic" text="다음" type="submit" onClick={handleSubmit} disabled={!isValid} />
      </StyledButtonWrap>
    </form>
  );
}
