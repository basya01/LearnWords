import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../../models/Word';

export enum GameStatus {
  CHOICE = 'choice',
  CHECK = 'check',
}

interface CheckState {
  status: GameStatus;
  words: Word[];
  result: number;
}

const initialState: CheckState = {
  status: GameStatus.CHOICE,
  words: [],
  result: 0,
};

export const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<Word>) => {
      if (state.words.find((item) => item.id === action.payload.id)) {
        state.words = state.words.filter((word) => word.id !== action.payload.id);
      } else {
        state.words.push(action.payload);
      }
    },
    cleanWords: (state) => {
      state.words = [];
    },
    setStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload;
    },
    setTotalResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
  },
});

export const { setWord, cleanWords, setStatus, setTotalResult } = checkSlice.actions;

export default checkSlice.reducer;
