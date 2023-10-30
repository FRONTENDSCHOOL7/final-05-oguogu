import { styled } from 'styled-components';
import iconGalleryMore from 'assets/images/icon_img_layers.png';
import { Link } from 'react-router-dom';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PostImgContainer = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const PostImgCard = styled(Link)`
  width: 114px;
  height: 114px;
  display: block;
  background: url(${(props) => props.$img}) no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const IconMore = styled.div`
  width: 20px;
  height: 20px;
  margin: 6px;
  margin-left: auto;

  background-image: url(${iconGalleryMore});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
`;
