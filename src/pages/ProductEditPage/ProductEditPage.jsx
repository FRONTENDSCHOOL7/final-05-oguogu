import React, { useEffect, useRef, useState } from 'react';
import Header from 'components/common/header/Header';
import { AddImage, AddImageBtn, ProductInfoInput, AddProductPageContainer, ImageBox, Label, AddProductInfo } from '../AddProductPage/AddProductPage.style';
import { productDetailAPI, productEditAPI, productUploadAPI } from 'api/product.api';
import { imgUploadAPI } from 'api/image.api';
import { useNavigate, useParams } from 'react-router';

export default function ProductEditPage() {
  const [image, setImage] = useState();
  const [productImage, setProductImage] = useState();
  const fileInputRef = useRef();
  const [productname, setProductname] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const formattedPrice = productPrice && Number(productPrice).toLocaleString();
  const [url, setUrl] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const navigate = useNavigate();
  const { productid } = useParams();
  const [currentFocus, setCurrentFocus] = useState(null);

  useEffect(() => {
    // 상품 ID를 사용하여 상품 정보 가져오기
    const getProductData = async () => {
      try {
        const productData = await productDetailAPI(productid);
        setProductname(productData.itemName);
        setProductPrice(productData.price);
        setUrl(productData.link);
        setProductImage(productData.itemImage);
      } catch (error) {
        alert.error('상품 정보를 가져오는 데 실패했습니다.', error);
      }
    };

    getProductData();
  }, [productid]);

  //상품 수정 요청
  const handleProductEdit = () => {
    //이미지 업로드
    imgUploadAPI(image).then((imgPath) => {
      const product = {
        itemName: productname,
        price: formattedPrice,
        link: url,
        itemImg: image === undefined ? productImage : imgPath,
      };
      //상품 수정
      productEditAPI(product, productid)
        .then(() => {
          navigate(-1);
        })
        .catch((error) => {
          alert.error('상품 수정에 실패했습니다.', error);
        });
    });
  };

  //가격에 입력되는 값 천의 자리에 콤마 붙이기
  const handlePriceChange = (e) => {
    const newPrice = e.target.value.replace(/[^0-9]/g, '');
    setProductPrice(newPrice);
  };

  //상품 이미지 등록
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProductImage(imageUrl);
    }
  };

  //상품 등록 내용이 모두 입력됐을 때 버튼 활성화
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

  return (
    <>
      <Header type="btn" btnText="저장" btndisabled={submitDisabled} rightOnClick={handleProductEdit} />
      <AddProductPageContainer>
        <AddImage>
          이미지 등록
          <ImageBox>
            {productImage && <img src={productImage} alt="" />}
            <AddImageBtn onClick={() => fileInputRef.current.click()}>
              <input style={{ display: 'none' }} type="file" accept="image/*" ref={fileInputRef} onChange={handleFileSelect} />
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
            onFocus={() => setCurrentFocus('product-name')}
            onBlur={() => setCurrentFocus('')}
            $isfocus={currentFocus === 'product-name'}
          />
          <Label htmlFor="product-price">가격</Label>
          <ProductInfoInput
            type="text"
            placeholder="숫자만 입력 가능합니다."
            value={formattedPrice}
            onChange={handlePriceChange}
            onFocus={() => setCurrentFocus('product-price')}
            onBlur={() => setCurrentFocus('')}
            $isfocus={currentFocus === 'product-price'}
          />
          <Label htmlFor="product-link">판매 링크</Label>
          <ProductInfoInput
            type="url"
            placeholder="URL을 입력해 주세요."
            value={url}
            onChange={handleOnChangeUrl}
            onFocus={() => setCurrentFocus('product-link')}
            onBlur={() => setCurrentFocus('')}
            $isfocus={currentFocus === 'product-link'}
          />
        </AddProductInfo>
      </AddProductPageContainer>
    </>
  );
}
