import styled from "styled-components";

export const FollowBg = styled.div`
  height : 100%;
`

export const UserList = styled.ul`
  padding : 24px 16px;
  display : flex;
  flex-direction: column;
  gap : 16px;
`

export const UserListEle = styled.li`
  height : 50px;
  width : 100%;
  gap : 5px;
  display : flex;
  align-items : center;

  img {
    width : 50px;
    height : 50px;
    border : 1px solid var(--gray-02);
    border-radius : 25px;
    object-fit :cover;
    flex-shrink : 0;
  }

  p {
    display : flex;
    flex-direction: column;
    padding : 6px 12px;
    color : var(--gray-01);
    font-size : 12px;
    justify-content : center;
  }
  
  span {
    color : black;
    font-weight : 500;
    font-size : 14px;
    padding-bottom : 6px;
  }

  button {
    margin-left : auto;
  }
`

