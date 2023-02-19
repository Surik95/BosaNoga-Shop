/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: null,
  error: false,
  categoryActive: '',
  valueSearch: '',
  indicatorButtonLoad: true,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    catalogRequest(state, action) {
      if (!action.payload) {
        action.payload = { url: { categoryId: '' } };
      }
      if (state.valueSearch !== '') {
        action.payload.url = {
          ...action.payload.url,
          q: state.valueSearch.trim().toUpperCase(),
        };
      }
      state.loading = true;
      state.error = null;
    },
    catalogFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    catalogSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    catalogIndicatorChange(state, action) {
      state.indicatorButtonLoad = !(action.payload.length < 6);
    },
    changeCategory(state, action) {
      state.categoryActive = action.payload.url.categoryId;
    },
    catalogLoadCart(state, action) {
      state.items = [...state.items, ...action.payload];
      state.loading = false;
      state.error = null;
    },
    changeSearch(state, action) {
      state.valueSearch = action.payload;
    },
  },
});

export const {
  catalogRequest,
  catalogFailure,
  catalogSuccess,
  changeCategory,
  catalogLoadCart,
  changeSearch,
  catalogIndicatorChange,
} = catalogSlice.actions;
export default catalogSlice.reducer;
