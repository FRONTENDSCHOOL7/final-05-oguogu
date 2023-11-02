import { styled } from 'styled-components';
import ogucat from 'assets/images/icon_ogucat_gray.png';

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
