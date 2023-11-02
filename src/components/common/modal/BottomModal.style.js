import styled, { keyframes } from 'styled-components';

const dimmedAni = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const ModalDimmed = styled.div`
  width: 390px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.32);
  z-index: 100;
  animation: 0.3s ease-out 0s 1 normal none running ${dimmedAni};
  transition: background-color 0.3s ease-out 0s;
`;

const modalAni = keyframes`
  0%{
    transform: translate(-50%,100%);
  }
  100%{
    transform: translate(-50%,0);
  }
`;

export const ModalBottomContainer = styled.section`
  width: 390px;
  padding: 32px 0 10px 0;
  background-color: white;
  border-radius: 10px 10px 0 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 101;
  transform: translateX(-50%);
  animation: 0.3s ease-out 0s 1 normal none running ${modalAni};
  transition: transform 0.3s ease-out 0s;

  &::before {
    content: '';
    background-color: var(--gray-02);
    display: inline-block;
    height: 4px;
    width: 50px;
    border-radius: 2px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: -16px;
  }
`;

export const ModalBottomEle = styled.button`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 26px;
  font-size: 14px;
`;
