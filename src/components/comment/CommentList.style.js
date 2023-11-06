import { ProfileImg } from 'components/post/PostCard.style';
import { styled } from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  padding: 20px 16px 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileImage = styled(ProfileImg)`
  width: 36px;
  height: 36px;
`;
