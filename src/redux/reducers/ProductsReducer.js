import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: { data: [] } };

export const productsReducer = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addProducts: (state, action) => {
      console.log('This is from productsReducer');
      console.log(action.payload);
      state.value = action.payload;
    },

    clearProducts: (state) => {
      state.value = initialState.value;
    }
  }
});
