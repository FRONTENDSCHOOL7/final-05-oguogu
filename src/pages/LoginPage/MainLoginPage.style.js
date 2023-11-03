import styled from "styled-components";
import kakaoLogo from 'assets/images/logo_Kakao.png';
import googleLogo from 'assets/images/logo_Google.png';
import facebookLogo from 'assets/images/logo_facebook.png';
import oguoguLogo from 'assets/images/icon_ogudog_pink.png';
import kakaoLogoActive from 'assets/images/logo_Kakao_white.png'
import googleLogoActive from 'assets/images/logo_Google_white.png'
import facebookLogoActive from 'assets/images/logo_facebook_white.png';
import oguoguLogoActive from 'assets/images/icon_ogudog_white.png';
import { OguoguSlogan, SplashPageBg } from "pages/SplashPage/SplashPage.style";

export const OguoguSlogan2 = styled(OguoguSlogan)`
width : 100% ;
font-size : 14px;
color : white;
  img{
    width: 212px;
  }
  p{
    padding-top : 10px;
  }
& {
    position: relative;
    animation: slide 1s ease-in-out ;
    animation-fill-mode : forwards;
}

@keyframes slide {
    from {
        top : 0px;
    }
    to {
        top: -150px;
    }
}
`

export const LoginContainer = styled.section`
  background-color: white;
  color: var(--gray-01);
  height: 336px;
  margin-top: 189px;
  border-radius: 20px 20px 0 0;
  position : fixed;
  bottom : 0px;

  & {
    animation: slide2 1s ease-in-out ;
    animation-fill-mode : forwards;
}

@keyframes slide2 {
    from {
        bottom : -336px;
    }
    to {
        bottom : 0px;
    }
}
`

export const SnsLoginBox = styled.ul`
  padding: 50px 34px 0px 34px;

  li{
  width: 322px;
  height: 44px;
  border-radius: 44px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 10px;
  justify-content: center;
  display: flex;
  align-items: center;

  font-size: 14px;
  background-repeat: no-repeat;
  background-position: 14px ;

  cursor: pointer;

  &:active{
    color : white ;
  }
  }
`

export const KakaoLogin = styled.li`
  border-color: #F2C94C;
  background-image: url(${kakaoLogo});
  background-size: 24px;

  &:active {
    background-color : #F2C94C ; 
    background-image : url(${kakaoLogoActive});
  }
`

export const GoogleLogin = styled.li`
  border-color: var(--gray-01);
  background-image: url(${googleLogo});
  background-size: 24px;

  &:active {
    background-color : var(--gray-01) ; 
    background-image : url(${googleLogoActive});
  }
`

export const FacebookLogin = styled.li`
  border-color: #2D9CDB;
  background-image: url(${facebookLogo});
  background-size: 24px;

  &:active {
    background-color : #2D9CDB ; 
    background-image : url(${facebookLogoActive});
  }
`

export const EmailLogin = styled.li`
  border-color: var(--main-color-01);
  background-image: url(${oguoguLogo});
  background-size: 30px;

  &:active {
    background-color : var(--main-color-01) ; 
    background-image : url(${oguoguLogoActive});
  }
`

export const LoginFooter = styled.footer`
  padding-top: 10px;
  font-size: 12px;

  button {
    font-size : inherit;
    color: var(--gray-01);
  }
  
`

export const FindPassword = styled.button`
  padding-right : 12px;
`

export const Join = styled.button`
  padding-left : 12px;
`