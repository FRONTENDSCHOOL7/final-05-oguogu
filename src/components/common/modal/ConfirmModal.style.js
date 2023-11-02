import styled, { keyframes } from 'styled-components';
import { ModalDimmed } from 'components/common/modal/BottomModal.style';

const slideDown = keyframes`
  0%{
    transform: translate(-50%, -60%);
  }
  100%{
    transform: translate(-50%, -50%);
  }
`;

const slideUp = keyframes`
  0%{
    transform: translate(-50%, -50%);
  }
  100%{
    transform: translate(-50%, -60%);
  }
`;

export const ConfirmDimmed = styled(ModalDimmed)`
  z-index: 200;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalAlertContainer = styled.section`
  width: 252px;
  height: 110px;
  background-color: white;
  border-radius: 10px;
  z-index: 201;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  animation: 0.3s ease-out 0s 1 normal none running ${(p) => (p.$isShow ? slideDown : slideUp)};
  transition: background-color 0.3s ease-out 0s;

  p {
    width: 100%;
    height: 64px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid var(--gray-02);
    border-width: 0 0 1px 0;
  }

  button {
    display: inline;
    width: 50%;
    height: 46px;
  }
`;
export const ModalAlertNo = styled.button`
  border: 1px solid var(--gray-02);
  border-width: 0 1px 0 0;
`;
export const ModalAlertYes = styled.button`
  color: var(--main-color-01);
`;
