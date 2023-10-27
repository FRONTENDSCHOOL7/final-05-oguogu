import { css, styled } from 'styled-components';
import iconMore from 'assets/images/icon_more_vertical_small.png';
import iconHeart from 'assets/images/icon_heart.png';
import iconHeartFill from 'assets/images/icon_heart_fill.png';
import iconComment from 'assets/images/icon_message_small.png';

export const PostReact = css`
  font-size: 12px;
  color: var(--gray-01);
  position: relative;
  margin-right: 16px;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 6px;
    position: relative;
    bottom: -6px;
  }
`;

export const Container = styled.article`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  gap: 12px;
`;

export const ProfileImg = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid var(--gray-02);
  border-radius: 50%;
  background: url(${(props) => props.$img}) no-repeat;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const PostBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding-top: 4px;
`;

export const MoreBtn = styled.button`
  width: 18px;
  height: 18px;
  background: url(${iconMore}) no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
`;

export const UserName = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-weight: var(--medium);
  color: var(--black);
  margin-bottom: 2px;
`;

export const UserId = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: var(--gray-01);
`;

export const PostText = styled.p`
  color: var(--black);
  font-size: 14px;
  line-height: 17px;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 228px;
  object-fit: cover;
  border-radius: 10px;
`;

export const PostComment = styled.span`
  &::before {
    background: url(${iconComment});
  }
  ${PostReact}
`;

export const PostHeart = styled.span`
  ${PostReact}
  &::before {
    background-image: url(${(props) => (props.hearted ? iconHeartFill : iconHeart)});
  }
`;

export const PostDate = styled.span`
  font-size: 10px;
  color: var(--gray-01);
`;
