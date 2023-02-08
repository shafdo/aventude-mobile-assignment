import Axios from 'axios';
import { API_ENDPOINT } from '@env';

export const SearchProductApi = (searchTerm) => {
  const response = Axios.get(`${API_ENDPOINT}/search/${searchTerm}`);
  return response;
};
