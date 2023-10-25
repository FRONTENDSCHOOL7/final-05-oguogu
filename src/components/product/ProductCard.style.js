import { styled } from 'styled-components';

export const Container = styled.article`
  width: 140px;
  height: 132px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  //드래그방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 85px;
  object-fit: cover;
  object-position: center;
`;

export const InfoBox = styled.div`
  padding: 7px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ItemName = styled.span`
  font-size: 14px;
  color: var(--black);
  cursor: pointer;
`;

export const ItemPrice = styled.span`
  font-size: 12px;
  color: var(--main-color-01);
  font-weight: 700;
`;
