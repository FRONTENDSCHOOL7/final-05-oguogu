import { styled } from 'styled-components';

export const ScrollContainer = styled.div`
  width: 100%;
  height: calc(100% - 108px);
  display: flex;
  flex-direction: column;
  background-color: var(--gray-03);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
