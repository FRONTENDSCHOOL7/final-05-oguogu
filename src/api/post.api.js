import { tokenInstance } from 'api/axiosInstance';

//게시글 등록

//팔로잉 게시글 목록(피드)
export const follwingPostAPI = async () => {
  try {
    const result = await tokenInstance.get(`post/feed`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//나의 게시글 목록
