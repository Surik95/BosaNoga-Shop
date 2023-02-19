/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: null,
  loading: null,
  error: false,
  form: { size: null, count: 1 },
  formUser: { phone: '', address: '' },
  basketTable: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    basketChangeForm(state, action) {
      state.form = { ...state.form, ...action.payload };
    },
    basketSubmitOrder(state, action) {
      action.payload = {
        owner: {
          phone: state.formUser.phone
            .replace(/(?<!\+)8/, '+7')
            .replace(/[\s-()]/g, ''),
          address: state.formUser.address,
        },
        items: state.basketTable.map((item) => (
          { id: item.id, price: item.sumPrice, count: item.count })),
      };
      state.loading = true;
      state.error = null;
    },
    basketFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    basketSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.result = action.payload;
    },
    addBasket(state, action) {
      const index = state.basketTable.findIndex(
        (item) => item.id === action.payload.id && item.size === state.form.size,
      );
      if (index === -1) {
        state.basketTable = [
          ...state.basketTable,
          { ...action.payload, ...state.form },
        ];
      } else {
        state.basketTable[index] = {
          ...state.basketTable[index],
          count: state.basketTable[index].count + state.form.count,
          sumPrice: state.basketTable[index].sumPrice + action.payload.sumPrice,
        };
      }
      state.form = initialState.form;
    },
    deleteItemBasket(state, action) {
      state.basketTable = state.basketTable.filter(
        (item) => item.id !== action.payload.id && item.size !== action.payload.size,
      );
      if (state.basketTable < 1) {
        state.formUser = { phone: '', address: '' };
      }
    },
    basketChangeFormUser(state, action) {
      state.formUser = { ...state.formUser, ...action.payload };
    },
    basketCheckPrice(state, action) {
      const index = state.basketTable.findIndex(
        (item) => item.id === action.payload.data.id
          && item.size === action.payload.size,
      );

      if (state.basketTable[index].price !== action.payload.data.price) {
        state.basketTable[index] = {
          ...state.basketTable[index],
          price: action.payload.data.price,
          sumPrice: state.basketTable[index].count * action.payload.data.price,
        };
      }
      state.loading = false;
    },
    basketRequestPrice(state) {
      state.loading = true;
      state.error = null;
    },
    clearBasket(state) {
      state.basketTable = initialState.basketTable;
      state.result = initialState.result;
      state.formUser = initialState.formUser;
    },
  },
});

export const {
  basketChangeForm,
  addBasket,
  deleteItemBasket,
  basketChangeFormUser,
  basketFailure,
  basketSuccess,
  basketSubmitOrder,
  basketCheckPrice,
  basketRequestPrice,
  clearBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
