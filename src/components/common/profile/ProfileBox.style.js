import styled from "styled-components";
import profileimgtem from 'assets/images/profile_img_tem.jpg'

export const ProfileBoxBg = styled.div`
background-color : white;
height : 314px;
border-bottom : 1px solid var(--gray-02);
padding : 30px 16px 26px 16px;
`

export const ProfileHeader = styled.section`
  height : 110px;
  display : flex;
  position : relative;
  justify-content : space-between;

  &>span{
  width : 124px;
  text-align : center;
  display : flex;
  justify-content : center;
  align-items : center;
  font-size : 8px;
  color : var(--gray-01);
  }
  
  &>span span{
    display : block;
    font-weight : bold;
    font-size : 18px;
    padding-bottom : 6px;
    color : black;
  }
`

export const ProfileImage = styled.div`
  position : absolute;
  left : 50%;
  transform : translateX(-50%);
  width : 110px;
  height : 110px;
  border : 1px solid var(--gray-02);
  border-radius : 55px;
  /* padding : 15px; */
  /* object-fit: contain; */
  background-image : url(${profileimgtem});
  background-repeat : no-repeat;
  background-size : cover;
  background-position : center;
`

export const ProfileMain = styled.ul`
  height : 114px;
  padding : 17px 0px 24px 0px;
  color : var(--gray-01);
  text-align : center;

  li:nth-child(1){
    color : black;
    font-size : 16px;
    font-weight : bold;
  }
  li:nth-child(2){
    font-size : 12px;
    padding : 6px 0px 17px 0px;
  }
  li:nth-child(3){
    font-size : 14px;
  }
`

export const ProfileBtns = styled.section`
  display : flex;
  justify-content : space-between;
  padding : 0px 63px;
`