import { styled } from 'styled-components';
import { ProfileImg } from 'components/post/PostCard.style';

export const Container = styled.li`
  height: 50px;
  width: 100%;
  gap: 5px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserImg = styled(ProfileImg)`
  width: 50px;
  height: 50px;
`;

export const UserInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const UserName = styled.p`
  color: var(--black);
  font-size: 14px;
  line-height: 17px;
  font-weight: var(--medium);
`;

export const UserIntro = styled.p`
  color: var(--gray-01);
  font-size: 12px;
  line-height: 14px;
`;
