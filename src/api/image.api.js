import { imgInstance } from 'api/axiosInstance';

export const imgUploadAPI = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  try {
    const result = await imgInstance.post('image/uploadfile', formData);
    return result.data.filename;
  } catch (error) {
    throw error;
  }
};
