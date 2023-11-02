import { atom } from 'recoil';

export const confirmState = atom({
  key: 'confirmState',
  default: {
    isOpen: false,
    isShow: false,
    content: '',
    type: '',
    onClick: null,
  },
});
