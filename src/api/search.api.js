import { tokenInstance } from 'api/axiosInstance';

// 내 프로필 정보 불러오기
export const userSearchAPI = async (keyword) => {
  try {
    const result = await tokenInstance.get(`user/searchuser/?keyword=${keyword}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
