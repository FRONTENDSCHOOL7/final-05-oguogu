import { styled } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  border-top: 1px solid var(--gray-02);
  background-color: var(--white);
  margin-top: 5px;
  position: relative;

  padding: 30px 16px;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  color: var(--black);
  line-height: 19px;
  margin-bottom: 2px;
`;

export const ButtonBox = styled.ul`
  width: 100%;
  margin: 6px 0;
  padding: 10px 0;
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  background-color: var(--white);
  &::-webkit-scrollbar {
    display: none;
  }

  position: sticky;
  top: 0;
  z-index: 10;
`;

export const ButtonItem = styled.li`
  flex-shrink: 0;
`;

export const LoaderBox = styled.div`
  position: relative;
  min-height: calc(100vh - 440px);
`;
