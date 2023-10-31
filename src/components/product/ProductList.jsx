import React, { useEffect, useState } from 'react';
import ProductCard from 'components/product/ProductCard';
import { CardBox, Container, MoreLink, SectionTitle } from 'components/product/ProductList.style';
import { EmptyBox, EmptyImg, EmptyText } from 'components/common/empty/EmptyMessage.style';
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
  }, [accountname, type]);

  const productlist = () => {
    return products.map((product) => {
      return (
        <li key={product.id}>
          <ProductCard id={product.id} price={product.price} name={product.itemName} link={product.link} img={product.itemImage} />
        </li>
      );
    });
  };

  return (
    products !== null && (
      <Container type={type}>
        <SectionTitle>판매 상품</SectionTitle>
        {products.length ? (
          <>
            <MoreLink to="/product">더보기</MoreLink>
            <CardBox onMouseDown={onDragStart} onMouseMove={isDrag ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
              {productlist()}
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
