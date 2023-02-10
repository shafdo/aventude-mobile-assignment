import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: { data: [] } };

export const searchProductsReducer = createSlice({
  name: 'searchProducts',
  initialState: initialState,
  reducers: {
    addSearchProducts: (state, action) => {
      console.log('This is from SearchProductsReducer');
      console.log(action.payload);
      state.value = action.payload;
    },

    clearSearchProducts: (state) => {
      state.value = initialState.value;
    }
  }
});
