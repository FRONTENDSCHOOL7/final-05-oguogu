import React from 'react';
import { modalState } from 'atoms/modal';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export default function useModal() {
  const [modalData, setModalData] = useRecoilState(modalState);

  const openModal = useCallback(
    ({ type, callback }) => {
      setModalData({
        isOpen: true,
        type: type,
        callback: callback,
      });
    },
    [setModalData]
  );

  const closeModal = useCallback(() => {
    setModalData({ isOpen: false, type: '', callback: [] });
  }, [setModalData]);

  return { modalData, openModal, closeModal };
}
