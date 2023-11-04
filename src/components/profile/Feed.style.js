import styled from 'styled-components';
import iconPostOn from 'assets/images/icon_post_list_on.png';
import iconPostOff from 'assets/images/icon_post_list_off.png';
import iconAlbumOn from 'assets/images/icon_post_album_on.png';
import iconAlbumOff from 'assets/images/icon_post_album_off.png';

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  border-top: 1px solid var(--gray-02);
  background-color: var(--white);
  margin-top: 6px;
  position: relative;
  padding: 60px 16px 0 16px;
`;

export const FeedHeader = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 1px solid var(--gray-02);
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  color: var(--black);
  line-height: 19px;
`;

export const PostNormalBtn = styled.button`
  width: 26px;
  height: 26px;
  background: url(${(props) => (props.$clicked ? iconPostOn : iconPostOff)}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const PostGalleryBtn = styled(PostNormalBtn)`
  background: url(${(props) => (props.$clicked ? iconAlbumOn : iconAlbumOff)}) no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: 16px;
`;

export const EmptyBox = styled.div`
  padding: 120px 0;
`;
