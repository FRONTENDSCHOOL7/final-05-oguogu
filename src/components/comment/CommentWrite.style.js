import { styled } from 'styled-components';

export const Container = styled.form`
  width: 390px;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: var(--white);
  border-top: 1px solid var(--gray-02);
  z-index: 99;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  border: none;

  &::placeholder {
    color: var(--gray-04);
  }
`;

export const WriteButton = styled.button`
  min-width: 25px;
  color: var(--main-color-01);
  font-size: 14px;

  &:disabled {
    color: var(--gray-04);
  }
`;
