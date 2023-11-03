import { tokenInstance } from 'api/axiosInstance';

// 유저검색
export const userSearchAPI = async (keyword) => {
  try {
    const result = await tokenInstance.get(`user/searchuser/?keyword=${keyword}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
