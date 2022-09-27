import { configureStore } from '@reduxjs/toolkit';
import dictionary from './slices/dictionary';

const store = configureStore({
  reducer: { dictionary },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
