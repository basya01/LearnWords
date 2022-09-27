import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../../models/Word';

export enum GameStatus {
  CHOICE = 'choice',
  CHECK = 'check',
  FINISH = 'finish',
}

interface CheckState {
  status: GameStatus;
  words: Word[];
}

const initialState: CheckState = { status: GameStatus.CHOICE, words: [] };

export const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<Word>) => {
      if (state.words.find(item => item.id === action.payload.id)) {
        state.words = state.words.filter((word) => word.id !== action.payload.id);
      } else {
        state.words.push(action.payload);
      }
    },
    setStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setWord, setStatus } = checkSlice.actions;

export default checkSlice.reducer;
