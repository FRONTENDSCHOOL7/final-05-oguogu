import { styled } from 'styled-components';
import iconMore from 'assets/images/icon_more_vertical.png';

export const Container = styled.li`
  width: 100%;
  display: flex;
  gap: 12px;
  position: relative;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 6px;
`;

export const UserName = styled.span`
  color: var(--black);
  font-size: 14px;
  line-height: 17px;
  font-weight: var(--medium);
`;

export const CommentText = styled.p`
  color: var(--gray-01);
  font-size: 14px;
  line-height: 17px;
`;

export const MoreBtn = styled.button`
  width: 20px;
  height: 20px;
  background: url(${iconMore}) no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
`;
