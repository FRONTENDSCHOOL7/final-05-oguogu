import React from 'react';
import ProductCard from './ProductCard';
import { CardBox, Container, MoreLink, SectionTitle } from './ProductList.style';
import useHorizontalScroll from 'hook/useHorizontalScroll';

export default function ProductList({ type }) {
  const { scrollRef, isDrag, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();

  return (
    <Container>
      <SectionTitle>판매 상품</SectionTitle>
      <MoreLink to="/product">더보기</MoreLink>
      <CardBox onMouseDown={onDragStart} onMouseMove={isDrag ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardBox>
    </Container>
  );
}
