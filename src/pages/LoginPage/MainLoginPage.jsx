import React from 'react'
import Logo from 'assets/images/logo_oguogu_white.png'
import { EmailLogin, FacebookLogin, FindPassword, GoogleLogin, Join, KakaoLogin, LoginFooter, LoginContainer, OguoguSlogan2, SnsLoginBox } from 'pages/LoginPage/MainLoginPage.style'
import { SplashPageBg } from 'pages/SplashPage/SplashPage.style'

export default function MainLoginPage() {

  const kakaoUrl = "https://www.kakaocorp.com/page/service/service/KakaoTalk"
  const googleUrl = "https://www.google.co.kr/"
  const facebookUrl = "https://www.facebook.com/?locale=ko_KR"


  return (
    <SplashPageBg>
      <OguoguSlogan2>
        <img src={Logo} alt="오구오구 로고" />
        <p>내 새꾸 자랑, 네 새꾸 자랑</p>
      </OguoguSlogan2>
      <LoginContainer>
        <SnsLoginBox>
          <KakaoLogin onClick={()=>{window.open(kakaoUrl)}}>카카오 계정으로 로그인</KakaoLogin>
          <GoogleLogin onClick={()=>{window.open(googleUrl)}}>구글 계정으로 로그인</GoogleLogin>
          <FacebookLogin onClick={()=>{window.open(facebookUrl)}}>페이스북 계정으로 로그인</FacebookLogin>
          <EmailLogin>이메일로 로그인</EmailLogin>
        </SnsLoginBox>
        <LoginFooter>
          <FindPassword>비밀번호 찾기</FindPassword>|
          <Join>회원가입</Join>
        </LoginFooter>
      </LoginContainer>
    </SplashPageBg>
  )
}
