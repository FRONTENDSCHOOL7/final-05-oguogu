import { atom } from 'recoil';

export const confirmState = atom({
  key: 'confirmState',
  default: {
    isOpen: false,
    content: '',
    type: '',
  },
});
