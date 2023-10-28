import { styled } from 'styled-components';
import iconOgudogGray from 'assets/images/icon_ogudog_gray.png';

export const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.$isProfileSetting ? '250px' : '48px')};
  border-bottom: none;
  background-color: var(--white);
  display: flex;
  justify-content: ${(props) => props.$justify};
  position: relative;
  align-items: ${(props) => (props.$isProfileSetting ? 'initial' : 'center')};
  padding-top: 36px;
  padding-left: ${(props) => (props.$isProfileSetting ? 'initial' : '34px')};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProfileSettingCenterText = styled.h1`
  margin: 0 auto;
  margin-bottom: 12px;
  color: var(--black);
  font-weight: var(--medium);
  font-size: 20px;
`;

export const CenterText = styled.h1`
  color: var(--black);
  font-weight: var(--medium);
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export const CenterSubText = styled.p`
  margin-bottom: 30px;
  color: var(--gray-01);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
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
  top: 75%;
  left: 55%;

  img {
    object-fit: cover;
    width: 22px;
  }
`;
