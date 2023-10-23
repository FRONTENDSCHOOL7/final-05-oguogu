import styled from 'styled-components';

export const CommonFont = `
    font-family: var(--main-font);
    font-style: normal;
    line-height: normal;
`;
export const Bg = styled.section`
  width: 100%;
  height: 844px;
  background: var(--main-color-03);
`;

export const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 13px 16px 13px 16px;
  border-bottom: 0.5px solid var(--gray-02);
 background-color: ${(props) => props.selectedItem === props.id && 'var(--main-color-02)'};
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
