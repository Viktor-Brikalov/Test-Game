import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { GameInitialStateTypes } from './types';
import { IGame } from '@/utils/types/games';

const initialState: GameInitialStateTypes = {
  games: [],
  selectedCurrency: 'Не выбрано',
  selectedProvider: 'Не выбрано',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setProvider: (state, { payload }: PayloadAction<string>) => {
      state.selectedProvider = payload;
    },
    setCurrency: (state, { payload }: PayloadAction<string>) => {
      state.selectedCurrency = payload;
    },
    initStore: (state, { payload }: PayloadAction<IGame[]>) => {
      state.games = payload;
    },
  },
});

export const { setCurrency, setProvider, initStore } = gameSlice.actions;

export default gameSlice.reducer;
