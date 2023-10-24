import styled from 'styled-components';

// ChatList
export const CommonFont = `
    font-family: var(--main-font);
    font-style: normal;
    line-height: normal;
`;
export const Bg = styled.section`
  width: 100%;
  height: 100%;
  background: var(--main-color-03);
`;

export const List = styled.li`
  background-color: ${(props) => props.$selectedItem === props.id && 'var(--main-color-02)'};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 13px 16px 13px 16px;
  border-bottom: 0.5px solid var(--gray-02);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  strong {
    color: var(--black);
    font-size: 14px;
    font-weight: var(--medium);
    ${CommonFont}
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    color: var(--gray-01);
    font-size: 12px;
    font-weight: var(--regular);
    ${CommonFont}
  }

  span {
    color: var(--gray-02);
    text-align: right;
    font-size: 10px;
    font-weight: var(--regular);
    ${CommonFont}
  }
`;

// ChatRoom 말풍선 대화
export const Container = styled.section`
  height: calc(100% - 128px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Wrap = styled.div`
  display: flex;
  gap: 6px;
  position: relative;
  margin-bottom: 9px;

  img {
    align-self: flex-start;
    margin-left: 16px;
  }
`;

export const ReverseWrap = styled.div`
  display: flex;
  gap: 6px;
  margin: 0 16px 9px;
  flex-direction: row-reverse;
  position: relative;
`;

export const TextBox = styled.div`
  max-width: 240px;
  padding: 12px;
  border: 1px solid #c4c4c4;
  border-radius: 0 10px 10px 10px;
  background-color: var(--white);
  p {
    color: var(--black);
    font-size: 14px;
    font-weight: var(--medium);
    line-height: normal;
    ${CommonFont};
  }
`;

export const TextBox2 = styled(TextBox)`
  border-radius: 10px 0 10px 10px;
  background: var(--main-color-01);
  border: none;
  p {
    color: var(--white);
  }
`;

export const Date = styled.span`
  color: var(--gray-01);
  font-size: 10px;
  font-weight: var(--medium);
  display: flex;
  flex-direction: column-reverse;
  ${CommonFont};
`;

export const Rect = styled.div`
  width: 239px;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url('https://i.ibb.co/QnZSSKv/4.jpg');
`;

export const labelStyle = styled.div`
  #chooseFile {
    visibility: hidden;
  }
`;

// ChatRoom 하단 채팅입력창
export const Bottom = styled.div`
  width: 390px;
  height: 60px;
  position: fixed;
  background-color: var(--white);
  bottom: 0;
  border-top: 1px solid var(--gray-02);
  padding: 0 16px;
  z-index: 99;
  display: flex;
  align-items: center;

  div {
    width: 36px;
    height: 36px;
    margin-right: 18px;
    background-color: var(--gray-04);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 22px;
    vertical-align: top;
    cursor: pointer;
  }

  #text {
    flex-grow: 1;
    border: none;
    margin-right: 7px;
  }

  input::placeholder {
    color: var(--gray-04);
    font-size: 14px;
    font-weight: 400;
    ${CommonFont};
  }
`;

export const Button = styled.button`
  color: ${(props) => (props.$inputText && props.$inputText.length > 0 ? 'var(--main-color-01)' : 'var(--gray-04)')};
  font-size: 14px;
  font-weight: 500;
`;
