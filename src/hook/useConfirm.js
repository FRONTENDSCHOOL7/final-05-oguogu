import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { confirmState } from '../atoms/confirm';

export default function useConfirm() {
  const [confirmData, setConfirmData] = useRecoilState(confirmState);

  const openConfirm = useCallback(
    ({ content, type }) => {
      setConfirmData({
        isOpen: true,
        content: content,
        type: type,
      });
    },
    [setConfirmData]
  );

  const closeConfirm = useCallback(() => {
    setConfirmData({ isOpen: false, content: '', type: '' });
  }, [setConfirmData]);

  return { confirmData, openConfirm, closeConfirm };
}
