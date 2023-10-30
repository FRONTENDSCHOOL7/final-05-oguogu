import styled from "styled-components";


  export const BlackBg = styled.div`
  width : 100%;
  height : 100%;
  background-color : rgba(0, 0, 0, 0.3);
  z-index : 250;
  position : fixed;
  top : 0;

  `

export const ModalAlertBg = styled.section`
  width : 252px;
  height : 110px;
  background-color : white;
  border-radius : 10px;
  z-index : 300;
  position : fixed;
  top : 50%;
  left : 50%;
  transform : translate(-50%,-50%);
  overflow : hidden;

  p{
    width : 100%;
    height : 64px;
    font-weight : 500;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align : center;
    border : 1px solid var(--gray-02);
    border-width : 0 0 1px 0;
  }

  button {
  display : inline;
  width : 50%;
  height : 46px;
  }
`
export const ModalAlertNo = styled.button`
  border : 1px solid var(--gray-02);
  border-width : 0 1px 0 0;

`
export const ModalAlertYes = styled.button`
  color : var(--main-color-01);
`