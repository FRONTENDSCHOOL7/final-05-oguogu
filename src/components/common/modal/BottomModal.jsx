import React from 'react';
import useModal from 'hook/useModal';
import { ModalBottomContainer, ModalBottomEle, ModalDimmed } from 'components/common/modal/BottomModal.style';
import { useLocation } from 'react-router';

export default function BottomModal() {
  const location = useLocation().pathname;
  const { modalData, closeModal } = useModal();

  const modalType = {
    myProfile: ['설정 및 개인정보', '로그아웃'],
    userProfile: ['신고하기'],
    myPost: ['삭제', '수정'],
    userPost: ['신고하기'],
    myComment: ['삭제'],
    userComment: ['신고하기'],
    myProduct: ['삭제', '수정', '웹사이트에서 상품보기'],
    userProduct: ['웹사이트에서 상품보기'],
    chatroom: ['채팅방 나가기', '신고하기'],
  };

  return (
    modalData.isOpen && (
      <>
        <ModalDimmed onClick={closeModal} $isShow={modalData.isShow} />
        <ModalBottomContainer $isShow={modalData.isShow}>
          {modalType[modalData.type].map((item, index) => (
            <ModalBottomEle key={index + 1} onClick={modalData.callback[index]} type="button">
              {item}
            </ModalBottomEle>
          ))}
        </ModalBottomContainer>
      </>
    )
  );
}
