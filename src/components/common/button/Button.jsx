import React from 'react';
import { ShadowButton, BasicButton, BASIC_BTN, SHADOW_BTN, BorderButton, BORDER_BTN } from './Button.style';

export default function Button({ size, vari, type, text, onClick, disabled }) {
  //버튼사이즈종류 : lg,md,sm,xs,md-shadow,sm-shadow,md-border,sm-border,xs-border
  switch (vari) {
    case 'shadow':
      return (
        <ShadowButton $size={SHADOW_BTN[size]} type={type} onClick={onClick} disabled={disabled}>
          {text}
        </ShadowButton>
      );
    case 'border':
      return (
        <BorderButton $size={BORDER_BTN[size]} type={type} onClick={onClick} disabled={disabled}>
          {text}
        </BorderButton>
      );
    default:
      return (
        <BasicButton $size={BASIC_BTN[size]} type={type} onClick={onClick} disabled={disabled}>
          {text}
        </BasicButton>
      );
  }
}
