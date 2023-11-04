import React, { useCallback, useEffect, useState } from 'react';
import ProductCard from 'components/product/ProductCard';
import { CardBox, Container, MoreLink, SectionTitle } from 'components/product/ProductList.style';
import { EmptyBox, EmptyImg, EmptyText } from 'components/common/empty/EmptyMessage.style';
import useHorizontalScroll from 'hook/useHorizontalScroll';
import { productListAPI } from 'api/product.api';
import { follwingListAPI } from 'api/follow.api';
import Loader from 'components/common/loader/Loader';

export default function ProductList({ type, accountname }) {
  const [products, setProducts] = useState(null);
  const { scrollRef, isDrag, isStart, onDragStart, onThrottleDragMove, onDragEnd } = useHorizontalScroll();

  const userPorductList = useCallback(() => {
    productListAPI(accountname)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        alert('판매상품목록 불러오기에 실패했습니다.');
      });
  }, [accountname]);

  const followingProductList = async () => {
    follwingListAPI(accountname)
      .then((res) => {
        const accountnamelist = res;
        accountnamelist.forEach((user) => {
          productListAPI(user.accountname)
            .then((res) => {
              setProducts((prev) => {
                if (prev !== null) {
                  return [...prev, ...res];
                } else {
                  return res;
                }
              });
            })
            .catch((err) => {
              alert('판매상품 목록 불러오기에 실패했습니다');
            });
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (type === 'profile') {
      userPorductList();
    } else if (type === 'home') {
      followingProductList();
    }
  }, [userPorductList, type]);

  const productlist = () => {
    return products.map((product) => {
      return (
        <li key={product.id}>
          <ProductCard
            id={product.id}
            price={product.price}
            name={product.itemName}
            link={product.link}
            img={product.itemImage}
            authaccountname={product.author.accountname}
            update={userPorductList}
          />
        </li>
      );
    });
  };

  return (
    <Container type={type}>
      <SectionTitle>판매 상품</SectionTitle>
      {products !== null ? (
        products.length ? (
          <>
            <MoreLink to="/product">더보기</MoreLink>
            <CardBox onMouseDown={onDragStart} onMouseMove={isStart ? onThrottleDragMove : null} onMouseUp={onDragEnd} onMouseLeave={onDragEnd} ref={scrollRef}>
              {productlist()}
            </CardBox>
          </>
        ) : (
          <EmptyBox>
            <EmptyImg />
            <EmptyText>판매중인 상품이 없어요</EmptyText>
          </EmptyBox>
        )
      ) : (
        <Loader />
      )}
    </Container>
  );
}
