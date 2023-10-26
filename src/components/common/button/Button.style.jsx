import { css, styled } from 'styled-components';
import iconBack from 'assets/images/icon_arrow_left.png';

export const BASIC_BTN = {
  xs: css`
    width: 56px;
    height: 28px;
    border-radius: 26px;
    font-size: 12px;
  `,
  sm: css`
    width: 90px;
    height: 32px;
    border-radius: 32px;
    font-size: 14px;
  `,
  md: css`
    width: 120px;
    height: 34px;
    border-radius: 30px;
    font-size: 14px;
  `,
  lg: css`
    width: 322px;
    height: 44px;
    border-radius: 44px;
    font-size: 14px;
  `,
};

export const SHADOW_BTN = {
  sm: css`
    width: 78px;
  `,
  md: css`
    width: 94px;
  `,
};

export const BORDER_BTN = {
  md: css`
    width: 120px;
    height: 34px;
    border-radius: 30px;
    font-size: 14px;
  `,
  sm: css`
    width: 100px;
    height: 34px;
    border-radius: 30px;
    font-size: 14px;
  `,
  xs: css`
    width: 56px;
    height: 28px;
    border-radius: 26px;
    font-size: 12px;
  `,
};

export const BasicButton = styled.button`
  background-color: var(--main-color-01);
  color: var(--white);
  ${(props) => props.$size}

  &:disabled {
    background-color: var(--main-color-02);
    cursor: default;
  }
`;

export const ShadowButton = styled.button`
  height: 28px;
  border-radius: 44px;
  background-color: ${(props) => (props.$selected ? 'var(--main-color-01)' : 'var(--white)')};
  color: ${(props) => (props.$selected ? 'var(--white)' : 'var(--black)')};
  font-size: 12px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  ${(props) => props.$size}
`;

export const BorderButton = styled.button`
  border: 1px solid ${(props) => (props.$pink ? 'var(--main-color-01)' : 'var(--gray-02)')};
  color: ${(props) => (props.$pink ? 'var(--main-color-01)' : 'var(--gray-01)')};
  background-color: var(--white);
  ${(props) => props.$size}
`;

export const BackBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${iconBack}) no-repeat;
  background-size: cover;
`;
