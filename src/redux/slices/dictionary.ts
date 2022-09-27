import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../../models/Word';

const initialState: Word[] = [];
export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Word>) => {
      state.push(action.payload);
    },
  },
});

export const { addWord } = dictionarySlice.actions;

export default dictionarySlice.reducer;
