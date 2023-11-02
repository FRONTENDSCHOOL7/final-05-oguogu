import { tokenInstance } from 'api/axiosInstance';

//댓글 작성
export const commentWriteAPI = async (postid, content) => {
  const reqData = {
    comment: {
      content: content,
    },
  };
  try {
    const result = await tokenInstance.post(`post/${postid}/comments`, reqData);
    return result.data.comment;
  } catch (error) {
    throw error;
  }
};

//댓글 리스트
export const commentListAPI = async (postid, skip) => {
  try {
    const result = await tokenInstance.get(`post/${postid}/comments/?limit=10&skip=${skip}`);
    return result.data.comments;
  } catch (error) {
    throw error;
  }
};

//댓글 삭제
export const commentDeleteAPI = async (postid, commentid) => {
  try {
    const result = await tokenInstance.delete(`post/${postid}/comments/${commentid}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//댓글 신고
export const commentReportAPI = async (postid, commentid) => {
  try {
    const result = await tokenInstance.post(`post/${postid}/comments/${commentid}/report`);
    return result.data.comment;
  } catch (error) {
    throw error;
  }
};
