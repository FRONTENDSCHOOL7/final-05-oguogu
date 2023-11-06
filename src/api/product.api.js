import { tokenInstance } from 'api/axiosInstance';

//상품등록
export const productUploadAPI = async (product) => {
  const reqData = {
    product: {
      itemName: product.itemName,
      price: parseInt((product.price).replace(/,/g , '')),
      link: product.link,
      itemImage: product.itemImg,
    },
  };
  try {
    const result = await tokenInstance.post('product', reqData);
    return result.data.product;
  } catch (error) {
    throw error;
  }
};

//상품 리스트
export const productListAPI = async (accountname) => {
  try {
    const result = await tokenInstance.get(`product/${accountname}`);
    return result.data.product;
  } catch (error) {
    throw error;
  }
};

//상품수정
export const productEditAPI = async (product, productid) => {
  const reqData = {
    product: {
      itemName: product.itemName,
      price: parseInt((product.price).replace(/,/g , '')),
      link: product.link,
      itemImage: product.itemImg,
    },
  };
  try {
    const result = await tokenInstance.put(`product/${productid}`, reqData);
    if (result.data.product) {
      return result.data.product;
    } else {
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

//상품삭제
export const productDeleteAPI = async (productid) => {
  try {
    const result = await tokenInstance.delete(`product/${productid}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//상품상세
export const productDetailAPI = async (productid) => {
  try {
    const result = await tokenInstance.get(`product/detail/${productid}`);
    return result.data.product;
  } catch (error) {
    throw error;
  }
};
