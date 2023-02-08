import Axios from 'axios';
import { API_ENDPOINT } from '@env';

export const ProductsApi = () => {
  const response = Axios.get(`${API_ENDPOINT}/product`);
  return response;
};
