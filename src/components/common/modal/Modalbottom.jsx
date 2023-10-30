import React, { useState } from 'react';
import { ModalBottomBg, ModalBottomEle } from './Modalbottom.style';
import ModalAlert from './ModalAlert';

export default function ModalBottom({ type }) {
  const [isAlertOpen, setAlertOpen] = useState(false);

  const openModalAlert = () => {
    setAlertOpen(true);
  };

  switch (type) {
    case 'profileMore' :
      return (
        <ModalBottomBg>
          <ModalBottomEle>설정 및 개인정보</ModalBottomEle>
          <ModalBottomEle onClick={openModalAlert}>로그아웃</ModalBottomEle>
          {isAlertOpen && (
            <ModalAlert kind='logout'
              onClose={() => setAlertOpen(false)} />
          )}
        </ModalBottomBg>
      );

    case 'profileProduct' :
      return (
        <ModalBottomBg>
          <ModalBottomEle onClick={openModalAlert}>삭제</ModalBottomEle>
          <ModalBottomEle>수정</ModalBottomEle>
          <ModalBottomEle>웹사이트에서 상품 보기</ModalBottomEle>
          {isAlertOpen && (
            <ModalAlert kind='deleteProduct'
              onClose={() => setAlertOpen(false)} />
          )}
        </ModalBottomBg>
      );

    case 'profilePost' :
      return (
        <ModalBottomBg>
          <ModalBottomEle onClick={openModalAlert}>삭제</ModalBottomEle>
          <ModalBottomEle>수정</ModalBottomEle>
          {isAlertOpen && (
            <ModalAlert kind='deletePost'
              onClose={() => setAlertOpen(false)} />
          )}
        </ModalBottomBg>
      );
    
    case 'postPost' :
      return (
        <ModalBottomBg>
          <ModalBottomEle>신고하기</ModalBottomEle>
        </ModalBottomBg>
      );
    
    case 'postComment' :
      return (
        <ModalBottomBg>
          <ModalBottomEle>신고하기</ModalBottomEle>
        </ModalBottomBg>
      );
    
    case 'chatRoom' :
      return (
        <ModalBottomBg>
          <ModalBottomEle onClick={openModalAlert}>채팅방 나가기</ModalBottomEle>
          <ModalBottomEle>신고하기</ModalBottomEle>
        </ModalBottomBg>
      );
    
  }

}
