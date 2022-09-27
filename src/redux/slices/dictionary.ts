import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../../models/Word';

const initialState: Word[] = [
  { id: 1, foreign: 'Apple', translated: 'Яблоко' },
  { id: 2, foreign: 'Orange', translated: 'Апельсин' },
  { id: 3, foreign: 'Cherry', translated: 'Вишня' },
  { id: 4, foreign: 'Pie', translated: 'Пирог' },
  { id: 5, foreign: 'Blanket', translated: 'Одеяло' },
  { id: 6, foreign: 'Plate', translated: 'Тарелка' },
  { id: 7, foreign: 'Apple', translated: 'Яблоко' },
  { id: 8, foreign: 'Orange', translated: 'Апельсин' },
  { id: 9, foreign: 'Cherry', translated: 'Вишня' },
  { id: 10, foreign: 'Pie', translated: 'Пирог' },
  { id: 11, foreign: 'Blanket', translated: 'Одеяло' },
  { id: 12, foreign: 'Plate', translated: 'Тарелка' },
  { id: 13, foreign: 'Apple', translated: 'Яблоко' },
  { id: 14, foreign: 'Orange', translated: 'Апельсин' },
  { id: 15, foreign: 'Cherry', translated: 'Вишня' },
  { id: 16, foreign: 'Pie', translated: 'Пирог' },
  { id: 17, foreign: 'Blanket', translated: 'Одеяло' },
  { id: 18, foreign: 'Plate', translated: 'Тарелка' },
];

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
