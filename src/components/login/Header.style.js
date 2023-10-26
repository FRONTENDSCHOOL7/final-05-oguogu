import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: none;
  background-color: var(--white);
  display: flex;
  justify-content: ${(props) => props.$justify};
  align-items: center;
  position: relative;
  padding: 36px 0 0 34px;
`;

export const CenterText = styled.h1`
  color: var(--black);
  font-weight: var(--medium);
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;
