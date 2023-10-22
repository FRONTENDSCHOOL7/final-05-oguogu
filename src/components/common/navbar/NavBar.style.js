import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 390px;
  height: 60px;
  position: fixed;
  background-color: var(--white);
  bottom: 0;
  border-top: 1px solid var(--gray-02);
  padding: 0 6px;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

export const NavLink = styled(Link)`
  width: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavIcon = styled.img`
  width: 32px;
  height: 24px;
  object-fit: contain;
  margin-top: 12px;
  margin-bottom: 4px;
`;

export const NavText = styled.span`
  color: ${(props) => props.$textcolor};
  font-size: 10px;
  text-align: center;
`;
