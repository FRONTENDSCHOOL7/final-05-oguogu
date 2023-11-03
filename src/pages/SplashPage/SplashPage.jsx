import React from 'react'
import { OguLogo01, OguLogo02, OguLogo03, OguLogo04, OguLogoContainer, OguText, OguoguSlogan, SplashPageBg } from './SplashPage.style'


export default function SplashPage() {
  return (
    <SplashPageBg>
      <OguoguSlogan>
        <OguLogoContainer>
        <OguLogo01/>
        <OguLogo03/>
        <OguLogo02/>
        <OguLogo04/>
        </OguLogoContainer>
      <OguText>내 새꾸 자랑, 네 새꾸 자랑</OguText>
      </OguoguSlogan>
    </SplashPageBg>
  )
}
