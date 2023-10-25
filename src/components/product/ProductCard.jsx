import React from 'react';
import { Container, InfoBox, Img, ItemName, ItemPrice } from './ProductCard.style';
import sample from 'assets/images/product_sample.jpeg';

export default function ProductCard({ img, name, price }) {
  return (
    <Container>
      <Img src={sample} alt="상품 미리보기 이미지" />
      <InfoBox>
        <ItemName>오곡이 그립톡</ItemName>
        <ItemPrice>15,000원</ItemPrice>
      </InfoBox>
    </Container>
  );
}
