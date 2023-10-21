import { styled } from 'styled-components';
import iconSerch from 'assets/images/icon_search.png';
import iconBack from 'assets/images/icon_arrow_left.png';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid var(--gray-02);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 85px;
  margin-left: 15px;
`;

export const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${iconSerch}) no-repeat;
  background-size: cover;
  margin-right: 16px;
`;

export const BackBtn = styled.button`
  width: 22px;
  height: 22px;
  background: url(${iconBack}) no-repeat;
  background-size: cover;
  margin-left: 16px;
  margin-right: 20px;
`;

export const SerachInput = styled.input`
  width: 100%;
  background-color: var(--gray-03);
  border: none;
  border-radius: 32px;
  font-size: 14px;
  color: var(--black);
  padding: 8px 16px;
  margin-right: 16px;

  &::placeholder {
    color: #c4c4c4;
  }
`;
