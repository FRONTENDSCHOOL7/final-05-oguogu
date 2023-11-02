import { styled } from 'styled-components';
import iconOgudogGray from 'assets/images/icon_ogudog_gray.png';

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
  background: url(${iconOgudogGray}) no-repeat center/79.836px 52.941px;

  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
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

  position: absolute;
  top: 36%;
  left: 54%;
  img {
    object-fit: cover;
    width: 22px;
  }
`;
