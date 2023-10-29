import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { CardBox, Container, EmptyBox, EmptyImg, EmptyText, MoreLink, SectionTitle } from 'components/product/ProductList.style';
import useHorizontalScroll from 'hook/useHorizontalScroll';
import { productListAPI } from 'api/product.api';

export default function ProductList({ type, accountname }) {
  const [products, setProducts] = useState(null);
  const { scrollRef, isDrag, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();

  useEffect(() => {
    if (type === 'profile') {
      const promise = productListAPI(accountname);
      promise.then((res) => {
        setProducts(res);
      });
    } else if (type === 'home') {
      //팔로잉 유저들의 판매상품
    }
  }, []);

  return (
    products !== null && (
      <Container type={type}>
        <SectionTitle>판매 상품</SectionTitle>
        {products.length ? (
          <>
            <MoreLink to="/product">더보기</MoreLink>
            <CardBox onMouseDown={onDragStart} onMouseMove={isDrag ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </CardBox>
          </>
        ) : (
          <EmptyBox>
            <EmptyImg />
            <EmptyText>판매중인 상품이 없어요</EmptyText>
          </EmptyBox>
        )}
      </Container>
    )
  );
}
