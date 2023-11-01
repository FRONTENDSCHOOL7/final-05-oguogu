import React, { useEffect, useState } from 'react';
import Header from 'components/common/header/Header';
import { AddImage, AddImageBtn, ProductInfoInput, AddProductPageContainer, ImageBox, Label, AddProductInfo } from './AddProductPage.style';

export default function AddProductPage() {
  
  //가격에 입력되는 값 천의 자리에 콤마 붙이기
  const [productPrice, setProductPrice] = useState('');
  const handlePriceChange = (e) => {
    const newPrice = e.target.value.replace(/[^0-9]/g, '');
    setProductPrice(newPrice);
  };
  const formattedPrice = productPrice && Number(productPrice).toLocaleString();

    //게시글 내용이 있을때만 버튼 활성화
    const [productname, setProductname] = useState('');
    const [url, setUrl] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
      if (productname === '' || formattedPrice === '' || url === '') {
        setSubmitDisabled(true);
      } else {
        setSubmitDisabled(false);
      }
    }, [productname, formattedPrice, url]);

      // 내용 입력 받기
  const handleOnChangeProductname = (e) => {
    setProductname(e.target.value);
  };
  const handleOnChangeUrl = (e) => {
    setUrl(e.target.value);
  };

    //게시글 업로드
    const handleSubmit = () => {
      console.log('상품 등록 완료')

    };

  return (
    <>
      <Header type='btn' btnText='저장' btndisabled={submitDisabled} rightOnClick={handleSubmit}/>
      <AddProductPageContainer>
        <AddImage>
          이미지 등록
          <ImageBox>
            <AddImageBtn />
          </ImageBox>
        </AddImage>
        <AddProductInfo>
          <Label htmlFor="product-name">상품명</Label>
          <ProductInfoInput
            type="text"
            placeholder="2~15자 이내여야 합니다."
            value={productname}
            onChange={handleOnChangeProductname} 
          />
          <Label htmlFor="product-price">가격</Label>
          <ProductInfoInput
            type="text"
            placeholder="숫자만 입력 가능합니다."
            value={formattedPrice}
            onChange={handlePriceChange}
          />
          <Label htmlFor="product-link">판매 링크</Label>
          <ProductInfoInput
            type="url"
            placeholder="URL을 입력해 주세요."
            value={url}
            onChange={handleOnChangeUrl} 
          />
        </AddProductInfo>
      </AddProductPageContainer>
    </>
  );
}