import { configureStore, createSlice } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { productsReducer } from './reducers/productsReducer';
import { searchProductsReducer } from './reducers/searchReducer';

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    products: productsReducer.reducer,
    searchProducts: searchProductsReducer.reducer
  }
});

export const { login, logout } = userReducer.actions;
export const { addProducts, clearProducts } = productsReducer.actions;
export const { addSearchProducts, clearSearchProducts } = searchProductsReducer.actions;
