import React, { useState } from 'react';
import { BlackBg, ModalAlertBg, ModalAlertNo, ModalAlertYes } from './ModalAlert.style';

export default function ModalAlert({ onClose }) {

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <BlackBg onClick={onClose}>
        <ModalAlertBg onClick={stopPropagation}>
          <p>로그아웃하시겠어요?</p>
          <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
          <ModalAlertYes>로그아웃</ModalAlertYes>
        </ModalAlertBg>
      </BlackBg>
    </div>
  );
}
