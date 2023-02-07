import { configureStore, createSlice } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    user: userReducer.reducer
  }
});

export const { login, logout } = userReducer.actions;
