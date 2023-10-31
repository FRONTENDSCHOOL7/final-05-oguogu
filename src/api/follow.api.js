import { tokenInstance } from 'api/axiosInstance';

//팔로우
export const followAPI = async (accountname) => {
  try {
    const result = await tokenInstance.post(`profile/${accountname}/follow`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//언팔로우
export const unfollowAPI = async (accountname) => {
  try {
    const result = await tokenInstance.delete(`profile/${accountname}/unfollow`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//팔로잉 리스트
export const follwingListAPI = async () => {
  try {
    const result = await tokenInstance.get(`profile/${accountname}/following`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//팔로워 리스트
export const follwerListAPI = async () => {
  try {
    const result = await tokenInstance.get(`profile/${accountname}/follower`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
