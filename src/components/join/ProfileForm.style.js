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
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  width: 110px;
  height: 110px;
  border: 1px solid var(--gray-02);
  border-radius: 55px;
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ChangeBtn = styled.label`
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
