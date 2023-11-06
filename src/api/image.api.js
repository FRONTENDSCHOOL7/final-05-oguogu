import { imgInstance } from 'api/axiosInstance';

export const imgUploadAPI = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  try {
    const result = await imgInstance.post('image/uploadfile', formData);
    const imgpath = 'https://api.mandarin.weniv.co.kr/' + result.data.filename;
    return imgpath;
  } catch (error) {
    throw error;
  }
};
