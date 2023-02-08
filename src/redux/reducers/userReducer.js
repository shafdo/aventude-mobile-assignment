import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: { uid: '', email: '', isLoggedIn: false } };

export const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialState.value;
    }
  }
});
