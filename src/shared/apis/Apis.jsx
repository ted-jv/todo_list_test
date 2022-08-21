import axios from "axios";

/* 기본 api */
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/* token이 들어간 api */
export const apiToken = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiToken.interceptors.request.use(
  (config) => {
    const authorization = localStorage.getItem("login-token");
    config.headers.Authorization = `Bearer ${authorization}`;
    return config;
  },
  (error) => {
    alert("apiToken 에러입니다.");
  }
);
