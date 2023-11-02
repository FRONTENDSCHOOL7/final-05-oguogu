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
        isShow: true,
        type: type,
        callback: callback,
      });
    },
    [setModalData]
  );

  const closeModal = useCallback(() => {
    setModalData((prev) => ({ ...prev, isShow: false }));
    setTimeout(() => {
      setModalData({ isOpen: false, type: '', callback: [] });
    }, 290);
  }, [setModalData]);

  return { modalData, openModal, closeModal };
}
