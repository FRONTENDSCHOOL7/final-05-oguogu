import React, { useCallback, useEffect, useState } from 'react';
import { ButtonBox, Container, ProductList, Title } from './ProductSection.style';
import Button from 'components/common/button/Button';
import Loader from 'components/common/loader/Loader';
import { productListAPI } from 'api/product.api';
import ProductItem from './ProductItem';

export default function ProductSection({ type, accountname, username }) {
  const [curSort, setCurSort] = useState(null);
  const [products, setProducts] = useState(null);

  const userPorductList = useCallback(() => {
    productListAPI(accountname)
      .then((res) => {
        setProducts(res);
        setCurSort('최신순');
      })
      .catch((err) => {
        alert('판매상품목록 불러오기에 실패했습니다.');
      });
  }, [accountname]);

  const followingProductList = useCallback(() => {
    let count = 0;
    accountname.forEach((user) => {
      productListAPI(user)
        .then((res) => {
          setProducts((prev) => {
            if (prev !== null) {
              return [...prev, ...res];
            } else {
              return res;
            }
          });
          count++;
          if (count === accountname.length) {
            setCurSort('최신순');
          }
        })
        .catch((err) => {
          alert('판매상품 목록 불러오기에 실패했습니다');
        });
    });
  }, [accountname.length]);

  const productItems = () => {
    return products.map((product) => {
      return (
        <ProductItem
          key={product.id}
          id={product.id}
          price={product.price}
          name={product.itemName}
          link={product.link}
          img={product.itemImage}
          authaccountname={product.author.accountname}
          update={userPorductList}
        />
      );
    });
  };

  const sortList = () => {
    if (products !== null) {
      switch (curSort) {
        case '최신순':
          const latestSort = products.toSorted((product1, product2) => {
            const date1 = new Date(product1.createdAt);
            const date2 = new Date(product2.createdAt);

            // Date 객체를 비교하여 정렬 순서를 결정
            if (date1 > date2) {
              return -1;
            } else if (date1 < date2) {
              return 1;
            } else {
              return 0;
            }
          });
          setProducts(latestSort);
          break;
        case '인기순':
          const popularSort = products.toSorted((product1, product2) => {
            return product2.author.followerCount - product1.author.followerCount;
          });
          setProducts(popularSort);
          break;
        case '최저가순':
          const lowerSort = products.toSorted((product1, product2) => {
            return product1.price - product2.price;
          });
          setProducts(lowerSort);
          break;
        case '최고가순':
          const exSort = products.toSorted((product1, product2) => {
            return product2.price - product1.price;
          });
          setProducts(exSort);
          break;
      }
    }
  };

  useEffect(() => {
    sortList();
  }, [curSort]);

  const SortButton = ['최신순', '인기순', '최저가순', '최고가순'].map((btn, idx) => (
    <Button vari="shadow" size="sm" key={idx} text={btn} selected={btn === curSort} onClick={() => setCurSort(btn)} />
  ));

  useEffect(() => {
    if (type === 'user') {
      userPorductList();
    } else if (type === 'all') {
      followingProductList();
    }
  }, [userPorductList, type]);

  return (
    <Container>
      <Title>{type === 'all' ? '판매 중인 상품' : `${username} 님이 판매 중인 상품`}</Title>
      <ButtonBox>{SortButton}</ButtonBox>
      <ProductList>{products !== null ? productItems() : <Loader />}</ProductList>
    </Container>
  );
}
