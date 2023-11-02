import { tokenInstance } from 'api/axiosInstance';

//좋아요
export const heartAPI = async (postid) => {
  try {
    const result = await tokenInstance.post(`post/${postid}/heart`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//좋아요취소
export const unheartAPI = async (postid) => {
  try {
    const result = await tokenInstance.delete(`post/${postid}/unheart`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
