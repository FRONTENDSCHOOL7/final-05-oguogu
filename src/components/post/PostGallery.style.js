import styled from "styled-components";
import iconGalleryMore from 'assets/images/icon_img_layers.png'

export const PostGalleryBg = styled.ul`
  display : grid;
  grid-gap : 8px;
  grid-template-columns : 1fr 1fr 1fr;
`

export const GalleryEle = styled.li`
  width : 114px;
  height : 114px;
  background-color : gold;
`

export const IconGalleryMore = styled.div`
  width : 20px;
  height : 20px;
  margin : 6px;
  margin-left : auto;
  
  background-image : url(${iconGalleryMore});
  background-repeat : no-repeat;
  background-size : 20px;
  background-position : center;
`