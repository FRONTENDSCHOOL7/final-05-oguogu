import React from 'react';
import { Container, InfoBox, Img, ItemName, ItemPrice } from 'components/product/ProductCard.style';

export default function ProductCard({ id, img, name, price }) {
  const formattedPrice = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price).replace('₩', '');

  return (
    <Container>
      <Img src={img} alt="상품 미리보기 이미지" />
      <InfoBox>
        <ItemName>{name}</ItemName>
        <ItemPrice>{formattedPrice}원</ItemPrice>
      </InfoBox>
    </Container>
  );
}
