import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../../models/Word';
import { getDataLS, setDataLS } from '../../utils/localStorageHelper';

const initialState: Word[] = getDataLS('dictionary');

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Word>) => {
      state.push(action.payload);
      setDataLS('dictionary', state);
    },
  },
});

export const { addWord } = dictionarySlice.actions;

export default dictionarySlice.reducer;
