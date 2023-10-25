import { styled } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  border-top: 1px solid var(--gray-02);
  background-color: var(--white);
  margin-top: 5px;
  position: relative;

  padding: 30px 16px;
  &::before {
    content: '';
    width: 100%;
    height: 5px;
    background-color: var(--gray-03);
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  color: var(--black);
  line-height: 19px;
  margin-bottom: 2px;
`;

export const ButtonBox = styled.ul`
  width: 100%;
  padding: 16px 0;
  position: absolute;
  top: 51px;
  left: 0;
  margin-left: 16px;
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonItem = styled.li`
  flex-shrink: 0;
`;
