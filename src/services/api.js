import axios from "axios";
import { getToken } from "./auth";

const { REACT_APP_API_URL: API_URL } = process.env;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

api.interceptors.request.use(async config => {
  // login(
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29tcGFueSI6IkRWRFNQIiwiaWF0IjoxNTc1ODYyMTU0LCJleHAiOjE1NzU5NDg1NTR9.ps7KDK7_4CvcDl2oVVbJVohiX2epcmixu19vLCu0UIQ"
  // );
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
