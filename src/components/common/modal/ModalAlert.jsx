import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom'; // React Router의 useHistory
import { BlackBg, ModalAlertBg, ModalAlertNo, ModalAlertYes } from './ModalAlert.style';

export default function ModalAlert({ onClose }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const navigate = useNavigate(); 
  const handleLogout = () => {
    console.log('로그아웃이 수행됩니다.');
    localStorage.removeItem('oguToken');
    localStorage.removeItem('oguUserInfo');
    navigate('/');
  };

  return (
    <div>
      <BlackBg onClick={onClose}>
        <ModalAlertBg onClick={stopPropagation}>
          <p>로그아웃하시겠어요?</p>
          <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
          <ModalAlertYes onClick={handleLogout}>로그아웃</ModalAlertYes>
        </ModalAlertBg>
      </BlackBg>
    </div>
  );
}