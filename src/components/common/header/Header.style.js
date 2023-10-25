import { styled } from 'styled-components';
import iconSerch from 'assets/images/icon_search.png';
import iconMore from 'assets/images/icon_more_vertical_small.png';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid var(--gray-02);
  background-color: var(--white);
  display: flex;
  justify-content: ${(props) => props.$justify};
  align-items: center;
  position: relative;
  padding: 0 16px;
`;

export const Logo = styled.img`
  width: 85px;
  margin-left: -1px;
`;

export const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${iconSerch}) no-repeat;
  background-size: cover;
`;

export const SerachInput = styled.input`
  width: 316px;
  background-color: var(--gray-03);
  border: none;
  border-radius: 32px;
  font-size: 14px;
  color: var(--black);
  padding: 8px 16px;

  &::placeholder {
    color: var(--gray-04);
  }
`;

export const CenterText = styled.h1`
  color: var(--black);
  font-size: 14px;
  font-weight: var(--medium);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LeftText = styled.h1`
  color: var(--black);
  font-size: 14px;
  font-weight: var(--medium);
  position: absolute;
  top: 50%;
  left: 48px;
  transform: translateY(-50%);
`;

export const EditBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${iconMore}) no-repeat;
  background-size: cover;
`;
