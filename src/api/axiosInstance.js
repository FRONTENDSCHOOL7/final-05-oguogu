import axios from 'axios';

const URL = 'https://api.mandarin.weniv.co.kr/';

// 기본 인스턴스
export const instance = axios.create({
  baseURL: URL,
  headers: { 'Content-Type': 'application/json' },
});

// 이미지 인스턴스
export const imgInstance = axios.create({
  baseURL: URL,
  headers: { 'Content-type': 'multipart/form-data' },
});

// 요청시 토큰이 필요한 인스턴스
export const tokenInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

tokenInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem('oguToken')}`,
    };
  }

  return config;
});
