import {
  takeLatest, put, spawn, call,
} from 'redux-saga/effects';
import {
  basketFailure,
  basketSuccess,
  basketCheckPrice,
} from '../slice/basketSlice';
import submitBasket from '../api/submitBasket';
import requestTopSales from '../api/requestTopSales';

// worker
function* basketSubmitSaga(action) {
  try {
    // const retryCount = 3;
    // const retryDelay = 1 * 1000; // ms
    const data = yield call(
      // retryCount,
      // retryDelay,
      submitBasket,
      action.payload,
    );
    if (data === 204) {
      yield put(basketSuccess(data));
    }
  } catch (e) {
    yield put(basketFailure(e.message));
  }
}

function* basketRequestPriceSaga(action) {
  try {
    const { size } = action.payload;
    // const retryCount = 3;
    // const retryDelay = 1 * 1000; // ms
    const data = yield call(
      // retryCount,
      // retryDelay,
      requestTopSales,
      `${process.env.REACT_APP_BOSANOGA_URL}${action.payload.id}`,
    );
    yield put(basketCheckPrice({ data, size }));
  } catch (e) {
    yield put(basketFailure(e.message));
  }
}

// worker
function* watchBasketSubmit() {
  yield takeLatest('basket/basketSubmitOrder', basketSubmitSaga);
}

function* watchBasketRequestPrice() {
  yield takeLatest('basket/basketRequestPrice', basketRequestPriceSaga);
}

export default function* basketSaga() {
  yield spawn(watchBasketSubmit);
  yield spawn(watchBasketRequestPrice);
}
