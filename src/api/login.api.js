import { instance } from 'api/axiosInstance';

export const loginAPI = async (email, pw) => {
  const reqData = {
    user: {
      email: email,
      password: pw,
    },
  };

  try {
    const result = await instance.post('user/login', reqData);
    return result.data;
  } catch (error) {
    throw error;
  }
};
