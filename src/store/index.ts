import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';

export const createStore = (initialState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

