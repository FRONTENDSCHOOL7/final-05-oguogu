import React, { useEffect, useState } from 'react';
import Logo from 'assets/images/logo_oguogu_white.png';
import {
  EmailLogin,
  FacebookLogin,
  FindPassword,
  GoogleLogin,
  Join,
  KakaoLogin,
  LoginFooter,
  LoginContainer,
  OguoguSlogan2,
  SnsLoginBox,
} from 'pages/LoginPage/MainLoginPage.style';
import { SplashPageBg } from 'pages/SplashPage/SplashPage.style';
import SplashPage from '../SplashPage/SplashPage';
import { Link, useNavigate } from 'react-router-dom';

export default function MainLoginPage() {
  const navigator = useNavigate();
  const kakaoUrl = 'https://www.kakaocorp.com/page/service/service/KakaoTalk';
  const googleUrl = 'https://www.google.co.kr/';
  const facebookUrl = 'https://www.facebook.com/?locale=ko_KR';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      {loading ? (
        <SplashPage />
      ) : (
        <SplashPageBg>
          <OguoguSlogan2>
            <img src={Logo} alt="오구오구 로고" />
            <p>내 새꾸 자랑, 네 새꾸 자랑</p>
          </OguoguSlogan2>
          <LoginContainer>
            <SnsLoginBox>
              <KakaoLogin
                onClick={() => {
                  window.open(kakaoUrl);
                }}
              >
                카카오 계정으로 로그인
              </KakaoLogin>
              <GoogleLogin
                onClick={() => {
                  window.open(googleUrl);
                }}
              >
                구글 계정으로 로그인
              </GoogleLogin>
              <FacebookLogin
                onClick={() => {
                  window.open(facebookUrl);
                }}
              >
                페이스북 계정으로 로그인
              </FacebookLogin>
              <EmailLogin onClick={() => navigator('/login')}>이메일로 로그인</EmailLogin>
            </SnsLoginBox>
            <LoginFooter>
              <FindPassword>비밀번호 찾기</FindPassword>|
              <Join>
                <Link to="/join">회원가입</Link>
              </Join>
            </LoginFooter>
          </LoginContainer>
        </SplashPageBg>
      )}
    </>
  );
}
