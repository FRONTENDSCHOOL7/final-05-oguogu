import { instance } from 'api/axiosInstance';

export const imgsUploadAPI = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  try {
    const result = await instance.post('image/uploadfiles', formData);
    const imgpath = 'https://api.mandarin.weniv.co.kr/' + result.data.filename;
    return imgpath;
  } catch (error) {
    throw error;
  }
};