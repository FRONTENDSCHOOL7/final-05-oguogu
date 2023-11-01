import React, { useEffect, useRef, useState } from 'react';
import Header from 'components/common/header/Header';
import { AddImage, AddImageBtn, ProductInfoInput, AddProductPageContainer, ImageBox, Label, AddProductInfo } from './AddProductPage.style';
import { productUploadAPI } from 'api/product.api';
import { imgUploadAPI } from 'api/image.api';

export default function AddProductPage() {
  
  //가격에 입력되는 값 천의 자리에 콤마 붙이기
  const [productPrice, setProductPrice] = useState('');
  const handlePriceChange = (e) => {
    const newPrice = e.target.value.replace(/[^0-9]/g, '');
    setProductPrice(newPrice);
  };
  const formattedPrice = productPrice && Number(productPrice).toLocaleString();

  //상품 이미지 등록
  const [productImage, setProductImage] = useState();
  const fileInputRef = useRef();
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProductImage(imageUrl);
    }
  }

  //상품 등록 내용이 모두 입력됐을 때 버튼 활성화
  const [productname, setProductname] = useState('');
  const [url, setUrl] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (productname === '' || formattedPrice === '' || url === '' || !productImage) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [productname, formattedPrice, url, productImage]);

  // 내용 입력 받기
  const handleOnChangeProductname = (e) => {
    setProductname(e.target.value);
  };
  const handleOnChangeUrl = (e) => {
    setUrl(e.target.value);
  };

    //게시글 업로드
    const handleSubmit = async () => {
      try {
        // 1. 제품 이미지를 업로드하고 이미지 URL을 얻습니다.
        const uploadedImageResponse = await imgUploadAPI(productImage);
        const productImageURL = uploadedImageResponse.imageUrl;
  
        // 2. 업로드한 이미지 URL 및 기타 세부 정보를 사용하여 제품을 생성합니다.
        await productUploadAPI({
          itemName: productname,
          price: formattedPrice,
          link: url,
          itemImg: productImageURL,
        });
  
        console.log('상품 등록 완료');
      } catch (error) {
        console.error('상품 등록 실패:', error);
      }
    };

  return (
    <>
      <Header type='btn' btnText='저장' btndisabled={submitDisabled} rightOnClick={handleSubmit}/>
      <AddProductPageContainer>
        <AddImage>
          이미지 등록
          <ImageBox>
          {productImage && <img src={productImage} alt="" />}
            <AddImageBtn onClick={() => fileInputRef.current.click()}>
              <input style={{display:'none'}} type="file" accept="image/*" ref={fileInputRef} onChange={handleFileSelect} />
            </AddImageBtn>
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