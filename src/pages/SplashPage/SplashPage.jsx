import React from 'react'
import { OguoguSlogan, SplashPageBg } from './SplashPage.style'

import Logo from 'assets/images/logo_oguogu_white.png'

export default function SplashPage() {
  return (
    <SplashPageBg>
      <OguoguSlogan>
      <img src={Logo} alt="오구오구 로고" />
      <p>내 새꾸 자랑, 네 새꾸 자랑</p>
      </OguoguSlogan>
    </SplashPageBg>
  )
}
