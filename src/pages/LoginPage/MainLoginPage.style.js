import styled from "styled-components";
import KakaoLogo from 'assets/images/logo_Kakao.png';
import GoogleLogo from 'assets/images/logo_Google.png';
import FacebookLogo from 'assets/images/logo_facebook.png';
import OguoguLogo from 'assets/images/icon_ogudog_pink.png';
import KakaoLogoActive from 'assets/images/logo_Kakao_white.png'
import GoogleLogoActive from 'assets/images/logo_Google_white.png'
import FacebookLogoActive from 'assets/images/logo_facebook_white.png';
import OguoguLogoActive from 'assets/images/icon_ogudog_white.png';


export const LoginPage = styled.div`
font-weight : 400;
height : 844px;
align-items : center ;
text-align: center;
background-color : var(--main-color-01);
`

export const OguoguSlogan = styled.div`
font-size : 14px;
color : white;
padding-top: 213px;

  img{
    width: 212px;
  }
`
export const LoginContainer = styled.form`
  background-color: white;
  color: var(--gray-01);
  height: 336px;
  margin-top: 189px;
  border-radius: 20px 20px 0 0;
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
  background-image: url(${KakaoLogo});
  background-size: 24px;

  &:active {
    background-color : #F2C94C ; 
    background-image : url(${KakaoLogoActive});
  }
`

export const GoogleLogin = styled.li`
  border-color: var(--gray-01);
  background-image: url(${GoogleLogo});
  background-size: 24px;

  &:active {
    background-color : var(--gray-01) ; 
    background-image : url(${GoogleLogoActive});
  }
`

export const FacebookLogin = styled.li`
  border-color: #2D9CDB;
  background-image: url(${FacebookLogo});
  background-size: 24px;

  &:active {
    background-color : #2D9CDB ; 
    background-image : url(${FacebookLogoActive});
  }
`

export const EmailLogin = styled.li`
  border-color: var(--main-color-01);
  background-image: url(${OguoguLogo});
  background-size: 30px;

  &:active {
    background-color : var(--main-color-01) ; 
    background-image : url(${OguoguLogoActive});
  }
`

export const LoginFooter = styled.footer`
  padding-top: 10px;
  font-size: 12px;
`

export const FindPassword = styled.a`
  padding-right : 12px;
`

export const Join = styled.button`
  font-family: inherit;
  color: inherit;
  padding-left : 12px;
`