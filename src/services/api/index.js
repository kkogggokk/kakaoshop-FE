import axios from 'axios'
import { getUserCookie } from '../cookie';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,   //
  timeout: 1000 * 10,
  headers: {
    "Content-Type" : "application/json",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
})

instance.interceptors.request.use((config) =>{
    const token = getUserCookie().token;
    if (token) {
      config.headers["Authorization"] = `${token}`; // `Bearer ${token}`;
    }
    return config;
  }
)

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      //const errorStatus = error.response.status;
        return Promise.reject(error.response.data.error);
    }
    return Promise.reject(error);
  }
)

