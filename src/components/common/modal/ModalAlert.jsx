import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { BlackContainer, ModalAlertContainer, ModalAlertNo, ModalAlertYes } from './ModalAlert.style';

export default function ModalAlert({ onClose,kind }) {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    console.log('로그아웃이 수행됩니다.');
    localStorage.removeItem('oguToken');
    localStorage.removeItem('oguUserInfo');
    navigate('/');
  };

  const handleProductDelete = () =>{
    console.log('해당 상품이 삭제됐습니다.')
    //상품 삭제 로직
  }
  const handlePostDelete = () =>{
    console.log('해당 게시글이 삭제됐습니다.')
    //게시글 삭제 로직
  }
  const handleChatRoomDelete = () =>{
    console.log('해당 채팅방을 나갔습니다.')
    //채팅방 삭제 로직
  }

  switch (kind) {
    case 'logout' :
    return (
      <>
        <BlackContainer onClick={onClose}/>
          <ModalAlertContainer >
            <p>로그아웃하시겠어요?</p>
            <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
            <ModalAlertYes onClick={handleLogout}>로그아웃</ModalAlertYes>
          </ModalAlertContainer>
      </>
    );

    case 'deleteProduct' :
    return (
      <>
        <BlackContainer onClick={onClose}/>
          <ModalAlertContainer >
            <p>상품을 삭제할까요?</p>
            <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
            <ModalAlertYes onClick={handleProductDelete}>삭제</ModalAlertYes>
          </ModalAlertContainer>
      </>
    );

    case 'deletePost' :
    return (
      <>
        <BlackContainer onClick={onClose}/>
          <ModalAlertContainer >
            <p>게시글을 삭제할까요?</p>
            <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
            <ModalAlertYes onClick={handlePostDelete}>삭제</ModalAlertYes>
          </ModalAlertContainer>
      </>
    );

    case 'deleteChatRoom' :
    return (
      <>
        <BlackContainer onClick={onClose}/>
          <ModalAlertContainer >
            <p>채팅방을 나갈까요?</p>
            <ModalAlertNo onClick={onClose}>취소</ModalAlertNo>
            <ModalAlertYes onClick={handleChatRoomDelete}>나가기</ModalAlertYes>
          </ModalAlertContainer>
      </>
    );
  }
}