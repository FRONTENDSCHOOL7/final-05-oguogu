import styled from "styled-components";
import oguLogoo1 from 'assets/images/logo_ogu_o1.png';
import oguLogoo2 from 'assets/images/logo_ogu_o2.png';
import oguLogogu1 from 'assets/images/logo_ogu_gu1.png';

export const SplashPageBg = styled.div`
font-weight : 400;
height : 100%;
display : flex ;
align-items : center ;
text-align: center;
background-color : var(--main-color-01);
`;

export const OguoguSlogan = styled.div`
width : 100% ;
`

export const OguText = styled.p`
  width : 100% ;
  font-size : 14px;
  color : white;
  opacity:0%;
  padding-top : 12px;
  animation: show 0.5s ease-in-out ;
  animation-fill-mode : forwards;
  animation-delay : 1.8s;

  @keyframes show {
    from{
      opacity:0%
    }
    to{
      opacity:100%
    }
    
  }
`

export const OguLogoContainer = styled.div`
  display: flex;
  top : -40px;
  position : relative;
  `

export const OguLogo01 = styled.div`
  background-image : url(${oguLogoo1});
  background-repeat : no-repeat;
  background-size: 56px;
  height : 46px;
  width : 56px;
  object-fit : contain;
  margin-left : 89px;
  top : 39px;
  position : relative;
  margin-top : 4px;
  animation: bound 2s ease-in-out ;
  animation-fill-mode : forwards;
  

  @keyframes bound {
    from {
      top : -80px;
      opacity : 0%;
    }
    35% {
      top : 39px;
      opacity : 100%;
    }
    55% {
      top : -20px;
    }
    75% {
      top : 39px;
    }
    90% {
      top : 20px;
    }
    to {
        top: 39px;
    }
} 
`

export const OguLogo03 = styled(OguLogo01)`
  background-image : url(${oguLogogu1});
  background-size: 48px;
  margin-top : 6px;
  height : 51px;
  width : 48px;
  margin-left : 1px;
  animation-delay : 0.1s;
`

export const OguLogo02 = styled(OguLogo01)`
  background-image : url(${oguLogoo2});
  background-size: 50px;
  height : 48px;
  width : 50px;
  margin-left : 4px;
  margin-top : 4px;
  animation-delay : 0.3s;

`
export const OguLogo04 = styled(OguLogo03)`
  background-image : url(${oguLogogu1});
  background-size: 48px;
  margin-top : 6px;
  height : 51px;
  width : 48px;
  margin-left : 5px;
  animation-delay : 0.2s;
`
