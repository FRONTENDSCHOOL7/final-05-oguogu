import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: {
    isOpen: false,
    isShow: false,
    type: '',
    callback: [],
  },
});