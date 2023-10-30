import React, { useState } from 'react';
import { ModalBottomBg, ModalBottomEle } from './Modalbottom.style';
import ModalAlert from './ModalAlert';

export default function ModalBottom() {
  const [isAlertOpen, setAlertOpen] = useState(false);

  const openModalAlert = () => {
    setAlertOpen(true);
  };

  return (
    <ModalBottomBg>
      <ModalBottomEle>설정 및 개인정보</ModalBottomEle>
      <ModalBottomEle onClick={openModalAlert}>로그아웃</ModalBottomEle>
      {isAlertOpen && (
        <ModalAlert
          onClose={() => setAlertOpen(false)} 
        />
      )}
    </ModalBottomBg>
  );
}
