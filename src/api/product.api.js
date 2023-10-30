import { tokenInstance } from 'api/axiosInstance';

//상품등록
export const productUploadAPI = async (product) => {
  const reqData = {
    product: {
      itemName: product.itemName,
      price: product.price,
      link: product.link,
      itemImage: product.itemImg,
    },
  };

  try {
    const result = await tokenInstance.post('product', reqData);
    console.log(result.data);
  } catch (error) {
    throw error;
  }
};

//상품 리스트
export const productListAPI = async (accountname) => {
  console.log(accountname);
  try {
    const result = await tokenInstance.get(`product/${accountname}`);
    return result.data.product;
  } catch (error) {
    throw error;
  }
};
