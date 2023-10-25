import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import arrowRight from 'assets/images/icon_arrow_right_small.png';

export const Container = styled.section`
  width: 100%;
  padding: 21px 0 0 16px;
  border-bottom: 1px solid var(--gray-02);
  position: relative;
  background-color: var(--white);
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  color: var(--black);
  margin-bottom: 16px;
  line-height: 19px;
`;

export const MoreLink = styled(Link)`
  color: var(--gray-01);
  font-size: 12px;
  position: absolute;
  top: 23px;
  right: 31px;

  &::after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    background: url(${arrowRight}) no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateX(100%);
  }
`;

export const CardBox = styled.div`
  width: 100%;
  height: 151px;
  padding-bottom: 19px;
  overflow-x: scroll;
  display: flex;
  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
