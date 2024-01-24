import { styled } from 'styled-components';
import iconGalleryMore from 'assets/images/icon_img_layers.png';
import { Link } from 'react-router-dom';
import imgIcon from 'assets/images/icon_img_layers.png';

export const Container = styled.ul`
  min-height: 550px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const PostImgContainer = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const PostImgCard = styled(Link)`
  position: relative;
  width: 114px;
  height: 114px;
  display: block;
  background: url(${(props) => props.$img}) no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const ImgIcon = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 20px;
  height: 20px;
  background: url(${imgIcon}) no-repeat;
  background-size: 20px;
  cursor: pointer;
`

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
