import { SectionTitle } from 'components/product/ProductList.style';
import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 21px 16px;
`;

export const Title = styled(SectionTitle)`
  margin: 0 0 2px 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
  margin: 6px 0;
  padding: 10px 0;
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 2px;
`;

export const ItemContainer = styled.li`
  max-width: 174px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 174px;
  height: 174px;
  border-radius: 8px;
  object-position: center;
  object-fit: cover;
`;
