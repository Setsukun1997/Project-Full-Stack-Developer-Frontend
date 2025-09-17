import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://project-full-stack-developer.onrender.com', 
  withCredentials: true,
});

export default instance;
