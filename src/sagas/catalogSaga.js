import {
  takeLatest, put, spawn, call,
} from 'redux-saga/effects';
import {
  catalogSuccess,
  catalogFailure,
  catalogRequest,
  catalogLoadCart,
  catalogIndicatorChange,
} from '../slice/catalogSlice';
import requestCatalog from '../api/requestCatalog';

// worker
function* catalogRequestSaga(action) {
  try {
    // const retryCount = 3;
    // const retryDelay = 1 * 1000; // ms
    const data = yield call(
      // retryCount,
      // retryDelay,
      requestCatalog,
      action.payload.url,
    );
    yield put(catalogIndicatorChange(data));
    // eslint-disable-next-line no-unused-expressions
    action.payload.add
      ? yield put(catalogLoadCart(data))
      : yield put(catalogSuccess(data));
  } catch (e) {
    yield put(catalogFailure(e.message));
  }
}

// worker
function* changeCategorySaga(action) {
  yield put(catalogRequest(action.payload));
}

// watcher
function* watchCatalogSaga() {
  yield takeLatest('catalog/catalogRequest', catalogRequestSaga);
}

function* watchChangeCategory() {
  yield takeLatest('catalog/changeCategory', changeCategorySaga);
}

function* watchCatalogLoadCart() {
  yield takeLatest('catalog/watchCatalogLoadCart', changeCategorySaga);
}

export default function* catalogSaga() {
  yield spawn(watchChangeCategory);
  yield spawn(watchCatalogSaga);
  yield spawn(watchCatalogLoadCart);
}
