import axios from 'axios';
import {NEWS_API_kEY} from '@env';
const customAxios = axios.create();
customAxios.defaults.headers.common.Authorization = NEWS_API_kEY;
customAxios.interceptors.request.use(
  async config => {
    config.headers = {
      ...config.headers,

      'Control-cache': 'no-store',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

customAxios.interceptors.response.use(
  response => Promise.resolve(response),
  async error => {
    if (!error.response) {
      return Promise.reject(error);
    }
  },
);

export default customAxios;
