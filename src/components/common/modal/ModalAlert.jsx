import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { BlackBg, ModalAlertBg, ModalAlertNo, ModalAlertYes } from './ModalAlert.style';

export default function ModalAlert({ onClose,kind }) {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    console.log('로그아웃이 수행됩니다.');
    localStorage.removeItem('oguToken');
    localStorage.removeItem('oguUserInfo');
    navigate('/');
  };

  switch (kind) {
    case 'logout' :
    return (
      <>
        <BlackBg onClick={onClose}/>
          <ModalAlertBg >
            <p>로그아웃하시겠어요?</p>
            <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
            <ModalAlertYes onClick={handleLogout}>로그아웃</ModalAlertYes>
          </ModalAlertBg>
      </>
    );

    case 'deleteProduct' :
    return (
      <>
        <BlackBg onClick={onClose}/>
          <ModalAlertBg >
            <p>상품을 삭제할까요?</p>
            <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
            <ModalAlertYes onClick={handleLogout}>삭제</ModalAlertYes>
          </ModalAlertBg>
      </>
    );

    case 'deletePost' :
    return (
      <>
        <BlackBg onClick={onClose}/>
          <ModalAlertBg >
            <p>게시글을 삭제할까요?</p>
            <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
            <ModalAlertYes onClick={handleLogout}>삭제</ModalAlertYes>
          </ModalAlertBg>
      </>
    );

  }


}