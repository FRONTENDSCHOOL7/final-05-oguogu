import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'components/common/button/Button';
import Input from 'components/common/Input/Input';
import { StyledInputWrap, StyledButtonWrap } from './LoginForm.style';
import { loginAPI } from 'api/login.api';

export default function Loginform() {
  const {
    setValue,
    register,
    handleSubmit,
    setError,
    trigger,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const [hasError, setHasError] = useState(false);
  const [error, setErrors] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || '/home';

  const LoginFormSubmit = (formData) => {
    const promise = loginAPI(formData.email, formData.password);
    promise
      .then((res) => {
        if (res.user) {
          const userInfo = { id: res.user._id, accountname: res.user.accountname, username: res.user.username, userimg: res.user.image };
          localStorage.setItem('oguUserInfo', JSON.stringify(userInfo));
          localStorage.setItem('oguToken', res.user.token);
          navigate(from);
        } else {
          if (res.status === 422) {
            setError('password', {
              message: '*이메일 또는 비밀번호를 확인해주세요.',
            });
          }
          setHasError(true);
        }
      })
      .catch((error) => {
        alert('에러 발생: ' + error.message);
      });
  };

  const handleFieldChange = () => {
    setErrors({});
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((formData) => {
          setHasError(false);
          LoginFormSubmit(formData);
        })}
      >
        <StyledInputWrap>
          <Input
            label="이메일"
            id="email"
            type="email"
            onChange={handleFieldChange}
            placeholder="이메일 주소를 입력해 주세요."
            hasError={hasError}
            registerOptions={{
              ...register('email', {
                required: '*이메일은 필수 입력 값이에요.',
                pattern: {
                  // eslint-disable-next-line
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: '*올바른 이메일을 입력해 주세요.',
                },
              }),
              errors,
            }}
          />
        </StyledInputWrap>
        <StyledInputWrap>
          <Input
            label="비밀번호"
            id="password"
            type="password"
            onChange={handleFieldChange}
            placeholder="비밀번호를 입력해 주세요."
            hasError={hasError}
            registerOptions={{
              ...register('password', {
                required: '*비밀번호는 필수 입력 값이에요.',
                minLength: {
                  value: 6,
                  message: '*비밀번호는 최소 6자 이상 입력해야 해요.',
                },
              }),
              errors: errors.password ? { password: errors.password } : error,
            }}
          />
        </StyledInputWrap>

        <StyledButtonWrap>
          <Button size="lg" vari="basic" text="로그인" type="submit" onClick={handleSubmit} disabled={!isValid} />
        </StyledButtonWrap>
      </form>
    </>
  );
}
