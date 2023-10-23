import styled from "styled-components";
import iconPicture from "assets/images/icon_picture_pink02.png"
import iconClose from "assets/images/icon_close.png"

export const UploadPageBg = styled.div`
height : 100%;
`

export const AddPictureContainer = styled.section`
display : flex;
padding : 21px 0px 21px 16px;
`

export const AddPictureBtn = styled.button`
  height : 80px;
  width : 80px;
  border : 1px solid var(--gray-02);
  border-radius : 10px;
  color : var(--gray-04);
  flex-shrink : 0;

  background-image : url(${iconPicture});
  background-repeat : no-repeat ;
  background-size : 22px;
  background-position : 28px 21px;
  padding-top : 26px;
`

export const AddPictureList = styled.ul`
  display : flex ;
  padding-left : 13px;
  gap : 13px;
`

export const AddPictureListEle = styled.li`
  height : 80px;
  width : 80px;
  background-color : var(--gray-02);
  border-radius : 10px;
  position : relative;
`

export const CanclePictureBtn = styled.button`
  position : absolute;
  height : 30px;
  width : 30px;
  right : 0;

  background-image : url(${iconClose});
  background-repeat : no-repeat;
  background-size : 22px;
  background-position : 4px;
`

export const EnterText = styled.textarea`
  width : 100% ;
  height : 377px ;
  border : 1px solid var(--gray-02);
  border-left : 0;
  border-right : 0;
  padding : 21px 16px;
  font-size : 14px;
  resize: none;
  
  &::placeholder{
    color: var(--gray-04);
  }
  
`

export const SelectCategory = styled.div`
  padding-top : 21px;
  padding-left : 16px;
  color : black;
`

export const Categorybox = styled.ul`
  padding : 13px 30px 13px 30px;
  display : grid ;
  grid-template-columns: repeat(3, 1fr);
  gap : 13px;
  grid-column-gap: 24px;
  
`
