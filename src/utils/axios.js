import axios from 'axios';

// const axiosConfig = {
//   baseURL: 'https://localhost:5000/api',
//   timeout: 30000
// };

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  response => response,
  error =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
