import { styled } from 'styled-components';

export const CenterText = styled.h1`
  color: var(--black);
  font-weight: var(--medium);
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export const ImageWrap = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 1px solid var(--gray-02);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-shrink: 0;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ChangeImg = styled.label`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background-color: var(--main-color-01);
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(219px, -42px);
  img {
    object-fit: cover;
    width: 22px;
    cursor: pointer;
  }
`;
