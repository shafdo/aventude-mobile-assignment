import Axios from 'axios';
import { API_ENDPOINT } from '@env';

export const LoginApi = (email, password) => {
  const postData = {
    email,
    password
  };

  const response = Axios.post(`${API_ENDPOINT}/user/login`, postData);
  return response;
};

export const GetUserInfoApi = () => {
  const response = Axios.get(`${API_ENDPOINT}/user`);
  return response;
};

export const RegisterApi = (email, password) => {
  const postData = {
    email,
    password
  };

  const response = Axios.post(`${API_ENDPOINT}/user/register`, postData);
  return response;
};
