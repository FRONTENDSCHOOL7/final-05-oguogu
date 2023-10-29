import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import arrowRight from 'assets/images/icon_arrow_right_small.png';
import ogucat from 'assets/images/icon_ogucat_gray.png';

export const Container = styled.section`
  width: 100%;
  min-height: 208px;
  padding: 21px 0 0 16px;
  border-bottom: 1px solid var(--gray-02);
  position: relative;
  background-color: var(--white);

  ${(props) => props.type === 'profile' && 'border-top: 1px solid var(--gray-02)'}
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

export const EmptyBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EmptyImg = styled.div`
  width: 46px;
  height: 36px;
  background: url(${ogucat}) no-repeat;
  background-size: contain;
  margin: 0 auto;
`;

export const EmptyText = styled.p`
  color: var(--black);
  font-size: 14px;
  text-align: center;
  margin-top: 7px;
`;
