import Axios from 'axios';
import { API_ENDPOINT } from '@env';

Axios.defaults.withCredentials = true;

export const GetOrdersApi = () => {
  const response = Axios.get(`${API_ENDPOINT}/order`);
  return response;
};

export const PlaceOrderApi = (productId, qty) => {
  const postData = {
    productId: productId,
    orderQty: qty
  };
  const response = Axios.post(`${API_ENDPOINT}/order`, postData);
  return response;
};
