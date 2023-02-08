import Axios from 'axios';
import { API_ENDPOINT } from '@env';

export const GetOrdersApi = () => {
  const response = Axios.get(`${API_ENDPOINT}/order`);
  return response;
};
