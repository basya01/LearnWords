import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDataLS, setDataLS } from '../../utils/localStorageHelper';

interface HistoryState {
  result: number;
  date: string;
}

const initialState: HistoryState[] = getDataLS('history');

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<HistoryState>) => {
      state.push(action.payload);
      setDataLS('history', state);
    },
  },
});

export const { addHistory } = historySlice.actions;

export default historySlice.reducer;
