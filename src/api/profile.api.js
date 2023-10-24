import { tokenInstance } from 'api/axiosInstance';

// 내 프로필 정보 불러오기
export const myInfoAPI = async () => {
  try {
    const result = await tokenInstance.get('user/myinfo');
    return result.data;
  } catch (error) {
    throw error;
  }
};

// 프로필 수정
export const EditMyInfoAPI = async ({ username, accountname, intro, image }) => {
  const reqData = {
    user: {
      username: username,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };
  try {
    const result = await tokenInstance.put('user');
    return result.data;
  } catch (error) {
    throw error;
  }
};

// (타인)개인 프로필
export const profileAPI = async (accountname) => {
  try {
    const result = await tokenInstance.get(`profile/:${accountname}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
