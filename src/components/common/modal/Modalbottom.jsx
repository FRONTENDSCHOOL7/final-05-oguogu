import React, { useState } from 'react';
import { ModalBottomContainer, ModalBottomEle } from './Modalbottom.style';
import ModalAlert from './ModalAlert';

export default function ModalBottom({ type, post_id }) {

  const [isAlertOpen, setAlertOpen] = useState(false);
  
  const openModalAlert = () => {
    setAlertOpen(true);
  };

  switch (type) {
    case 'profileMore' :
      return (
        <ModalBottomContainer>
          <ModalBottomEle>설정 및 개인정보</ModalBottomEle>
          <ModalBottomEle onClick={openModalAlert}>로그아웃</ModalBottomEle>
          {isAlertOpen && (
            <ModalAlert kind='logout'
              onClose={() => setAlertOpen(false)} />
          )}
        </ModalBottomContainer>
      );

    case 'profileProduct' :
      return (
        <ModalBottomContainer>
          <ModalBottomEle onClick={openModalAlert}>삭제</ModalBottomEle>
          <ModalBottomEle>수정</ModalBottomEle>
          <ModalBottomEle>웹사이트에서 상품 보기</ModalBottomEle>
          {isAlertOpen && (
            <ModalAlert kind='deleteProduct'
              onClose={() => setAlertOpen(false)} />
          )}
        </ModalBottomContainer>
      );

    case 'profilePost' :
      return (
        <ModalBottomContainer>
          <ModalBottomEle onClick={openModalAlert}>삭제</ModalBottomEle>
          <ModalBottomEle>수정</ModalBottomEle>
          {isAlertOpen && (
            <ModalAlert kind='deletePost' post_id={post_id}
              onClose={() => setAlertOpen(false)} />
          )}
        </ModalBottomContainer>
      );
    
    case 'postPost' :
      return (
        <ModalBottomContainer>
          <ModalBottomEle>신고하기</ModalBottomEle>
        </ModalBottomContainer>
      );
    
    case 'postComment' :
      return (
        <ModalBottomContainer>
          <ModalBottomEle>신고하기</ModalBottomEle>
        </ModalBottomContainer>
      );
    
    case 'chatRoom' :
      return (
        <ModalBottomContainer>
          <ModalBottomEle onClick={openModalAlert}>채팅방 나가기</ModalBottomEle>
          <ModalBottomEle>신고하기</ModalBottomEle>
          {isAlertOpen && (
            <ModalAlert kind='deleteChatRoom'
              onClose={() => setAlertOpen(false)} />
          )}
        </ModalBottomContainer>
      );
    
  }

}
