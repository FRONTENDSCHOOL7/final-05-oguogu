import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 844px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Img = styled.img`
  width: 167px;
  margin-bottom: 10px;
`;

export const Text = styled.span`
  font-size: 14px;
  color: var(--gray-01);
`;

export const SearchLink = styled.a`
  display: block;
  font-size: 14px;
  line-height: 17px;
  color: var(--white);
  padding: 13px 36px;
  border-radius: 44px;
  background-color: var(--main-color-01);
`;

styled(Container)