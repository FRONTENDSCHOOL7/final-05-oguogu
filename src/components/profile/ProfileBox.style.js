import styled from 'styled-components';
import profileimgtem from 'assets/images/profile_img_tem.jpg';

export const ProfileBoxBg = styled.div`
  background-color: white;
  min-height: 314px;
  border-bottom: 1px solid var(--gray-02);
  padding-top: 30px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProfileHeader = styled.section`
  height: 110px;
  display: flex;
  position: relative;
  justify-content: space-between;

  & > span {
    width: 124px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
    color: var(--gray-01);
  }

  & > span p {
    cursor: pointer;
  }

  & > span span {
    display: block;
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 6px;
    color: black;
  }
`;

export const ProfileImage = styled.div`
  width: 110px;
  height: 110px;
  border: 1px solid var(--gray-02);
  border-radius: 55px;
  /* padding : 15px; */
  /* object-fit: contain; */
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ProfileMain = styled.ul`
  height: 114px;
  padding-top: 17px;
  color: var(--gray-01);
  text-align: center;

  li:nth-child(1) {
    color: black;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    margin-bottom: 6px;
  }
  li:nth-child(2) {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 17px;
  }
  li:nth-child(3) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const ProfileBtns = styled.section`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.$gap};
  margin-bottom: 26px;
`;

export const IconButton = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid var(--gray-02);
  border-radius: 50%;
  background: url(${(props) => props.$img}) no-repeat;
  background-size: 20px;
  background-position: center;
`;
