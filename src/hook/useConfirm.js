import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { confirmState } from 'atoms/confirm';

export default function useConfirm() {
  const [confirmData, setConfirmData] = useRecoilState(confirmState);

  const openConfirm = useCallback(
    ({ content, type, onClick }) => {
      setConfirmData({
        isOpen: true,
        isShow: true,
        content: content,
        type: type,
        onClick: onClick,
      });
    },
    [setConfirmData]
  );

  const closeConfirm = useCallback(() => {
    setConfirmData((prev) => ({ ...prev, isShow: false }));
    setTimeout(() => {
      setConfirmData({ isOpen: false, content: '', type: '', onClick: null });
    }, 300);
  }, [setConfirmData]);

  return { confirmData, openConfirm, closeConfirm };
}
