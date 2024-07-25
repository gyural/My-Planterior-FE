import axios from "axios";
import { baseURL } from "./url";

const instance = axios.create({
  baseURL: baseURL, // 기본 URL 설정
  headers: {
    'Content-Type': 'application/json',
  },
  // 다른 설정 추가 가능
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 요청 전 수행할 작업
    // 예: 인증 토큰 추가
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    // 응답 데이터 가공
    return response;
  },
  (error) => {
    // 응답 에러 처리
    return Promise.reject(error);
  }
);

export default instance;