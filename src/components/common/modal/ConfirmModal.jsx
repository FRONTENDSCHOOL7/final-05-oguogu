import React from 'react';
import { ConfirmDimmed, ModalAlertContainer, ModalAlertNo, ModalAlertYes } from 'components/common/modal/ConfirmModal.style';
import useConfirm from 'hook/useConfirm';
import useModal from 'hook/useModal';

export default function ConfirmModal() {
  const { confirmData, closeConfirm } = useConfirm();
  const { closeModal } = useModal();

  const confirmYes = {
    delete: '삭제',
    report: '신고',
    follow: '예',
    logout: '로그아웃',
  };

  const confirmNo = {
    delete: '취소',
    report: '취소',
    follow: '아니오',
    logout: '취소',
  };

  const clickConfirmYes = () => {
    closeModal();
    confirmData.onClick();
    closeConfirm();
  };

  return (
    confirmData.isOpen && (
      <>
        <ConfirmDimmed onClick={closeConfirm} $isShow={confirmData.isShow} />
        <ModalAlertContainer $isShow={confirmData.isShow}>
          <p>{confirmData.content}</p>
          <ModalAlertNo onClick={closeConfirm}>{confirmNo[confirmData.type]}</ModalAlertNo>
          <ModalAlertYes onClick={clickConfirmYes}>{confirmYes[confirmData.type]}</ModalAlertYes>
        </ModalAlertContainer>
      </>
    )
  );
}
