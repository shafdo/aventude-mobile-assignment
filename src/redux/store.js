import { configureStore, createSlice } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { productsReducer } from './reducers/ProductsReducer';

export const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    products: productsReducer.reducer
  }
});

export const { login, logout } = userReducer.actions;
export const { addProducts, clearProducts } = productsReducer.actions;
