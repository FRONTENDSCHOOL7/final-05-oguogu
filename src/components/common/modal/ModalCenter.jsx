import React from 'react'
import { BlackBg, ModalCenterBg, ModalCenterNo, ModalCenterYes } from './ModalCenter.style'

export default function ModalCenter() {
  return (
    <BlackBg>
      <ModalCenterBg>
      <p>로그아웃하시겠어요?</p>
      <ModalCenterNo>취소</ModalCenterNo>
      <ModalCenterYes>로그아웃</ModalCenterYes>
      </ModalCenterBg>
    </BlackBg>
  )
}
