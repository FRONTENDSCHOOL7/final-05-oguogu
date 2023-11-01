import { tokenInstance } from 'api/axiosInstance';

//게시글 등록
export const postUploadAPI = async (content, img) => {
  const reqData = {
    post: {
      content: content,
      image: img, //"imageurl1, imageurl2" 형식으로
    },
  };
  try {
    const result = await tokenInstance.post(`post`, reqData);
    return result.data.post;
  } catch (error) {
    throw error;
  }
};

//팔로잉 게시글 목록(피드)
export const follwingPostAPI = async () => {
  try {
    const result = await tokenInstance.get(`post/feed`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//유저 게시글 목록
export const postListAPI = async (accountname) => {
  try {
    const result = await tokenInstance.get(`post/${accountname}/userpost`);
    return result.data.post;
  } catch (error) {
    throw error;
  }
};

//게시글 상세
export const postDetailAPI = async (postid) => {
  try {
    const result = await tokenInstance.get(`post/${postid}`);
    return result.data.post;
  } catch (error) {
    throw error;
  }
};

//게시글 수정
export const PostEditAPI = async (content, img, postid) => {
  const reqData = {
    post: {
      content: content,
      image: img, //"imageurl1, imageurl2" 형식으로
    },
  };

  try {
    const result = await tokenInstance.put(`post/${postid}`, reqData);
    if (result.data.post) {
      return result.data.post;
    } else {
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

//게시글 삭제
export const PostDeleteAPI = async (postid) => {
  try {
    const result = await tokenInstance.delete(`post/${postid}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
