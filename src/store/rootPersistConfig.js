import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import catalogReducer from '../slice/catalogSlice';
import basketReducer from '../slice/basketSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['catalog', 'basket'],
};

const basketPersistConfig = {
  key: 'basketPersist',
  storage,
  whitelist: ['formUser', 'basketTable'],
};

const reducer = combineReducers({
  basket: persistReducer(basketPersistConfig, basketReducer),
  catalog: catalogReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export default persistedReducer;
