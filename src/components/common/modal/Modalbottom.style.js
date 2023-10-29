import styled from "styled-components";

export const ModalBottomBg = styled.section`
  width : 390px;
  padding : 32px 0 10px 0;
  background-color : white;
  border-radius : 10px 10px 0 0 ;
  position : fixed;
  bottom : 0;
  z-index : 200;
  
  &::before{
  content: "";
  background-color : var(--gray-02);
  display: inline-block;
  height : 4px;
  width : 50px;
  border-radius : 2px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top : -16px;
  }
`

export const ModalBottomEle = styled.p`
  width : 100%;
  height : 46px;
  display : flex;
  align-items : center;
  padding-left : 26px;
  font-size : 14px;
`