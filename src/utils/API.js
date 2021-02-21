import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://localhost:5001/api',
  timeout: 30000
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
