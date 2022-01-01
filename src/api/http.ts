import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from 'utils/index.utils';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    accept: '*/*',
  },
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };
});

export default axiosInstance;
