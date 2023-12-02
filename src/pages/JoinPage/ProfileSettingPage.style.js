import { styled } from 'styled-components';

export const Container2 = styled.div`
  width: 100%;
  border-bottom: none;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 36px;

  button {
    margin: 0 auto;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileSettingCenterText = styled.h1`
  margin: 0 auto;
  margin-bottom: 12px;
  color: var(--black);
  font-weight: var(--medium);
  font-size: 20px;
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
