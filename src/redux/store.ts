import { configureStore } from '@reduxjs/toolkit';
import dictionary from './slices/dictionary';
import check from './slices/check';

const store = configureStore({
  reducer: { dictionary, check },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
