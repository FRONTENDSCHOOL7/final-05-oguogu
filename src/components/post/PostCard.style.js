import { css, styled } from 'styled-components';
import iconMore from 'assets/images/icon_more_vertical_small.png';
import iconHeart from 'assets/images/icon_heart.png';
import iconHeartFill from 'assets/images/icon_heart_fill.png';
import iconComment from 'assets/images/icon_message_small.png';
import iconArrow from 'assets/images/icon_arrow_right_small_white.png'

const PostReact = css`
  font-size: 12px;
  color: var(--gray-01);
  position: relative;
  margin-right: 16px;
  cursor: pointer;

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

const textEllipsis = css`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

export const Container = styled.article`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  gap: 12px;
  background-color: var(--white);
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
  cursor: pointer;
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
  width: fit-content;
  cursor: pointer;
`;

export const UserId = styled.p`
  width: fit-content;
  font-size: 12px;
  line-height: 14px;
  color: var(--gray-01);
  cursor: pointer;
`;

export const PostText = styled.p`
  color: var(--black);
  font-size: 14px;
  line-height: 17px;
  ${(props) => props.$ell && textEllipsis}
  cursor: pointer;
`;

export const PostImgContainer = styled.div`
  width : 100%;
  height : 228px;
  overflow : hidden;
  position : relative;
`
export const PostImgWrapper = styled.div`
  height : 100%;
  display : flex;
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}%);
`

export const PostImgInner = styled.div`
  width: 100%;
  height : 100%;
  flex-shrink: 0;
`

export const PostImg = styled.img`
  /* position : relative; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

export const NextBtn = styled.span`
  width : 30px;
  height : 30px;
  background-image : url(${iconArrow});

  position: absolute;
  right : 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: ${({ direction }) => direction === "prev" && "0px"};
  right: ${({ direction }) => direction === "next" && "0px"};
  /* width: 36px; */
  /* height: 36px; */
  /* border-radius: 50%; */
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`

export const PrevBtn = styled(NextBtn)`
  transform : rotate(180deg);
  left : 0;
  
`

export const PostComment = styled.span`
  &::before {
    background: url(${iconComment});
  }
  ${PostReact}
`;

export const PostHeart = styled.span`
  ${PostReact}
  &::before {
    background-image: url(${(props) => (props.$hearted ? iconHeartFill : iconHeart)});
  }
`;

export const PostDate = styled.span`
  font-size: 10px;
  color: var(--gray-01);
`;
