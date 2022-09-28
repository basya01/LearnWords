import { configureStore } from '@reduxjs/toolkit';
import dictionary from './slices/dictionary';
import check from './slices/check';
import history from './slices/history';

const store = configureStore({
  reducer: { dictionary, check, history },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
