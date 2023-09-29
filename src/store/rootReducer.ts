import { combineReducers, AnyAction, CombinedState } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';

import game from './game';

import { GameInitialStateTypes } from './game/types';

export const RESET_STORE_ACTION_TYPE = 'RESET_WHOLE_STORE';

const combinedReducer = combineReducers({
  game,
});

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = (
  state:
    | CombinedState<{
        game: GameInitialStateTypes;
      }>
    | undefined,
  action: AnyAction,
) => {
  if (action.type === RESET_STORE_ACTION_TYPE) {
    return combinedReducer(undefined, action);
  }

  return combinedReducer(state, action);
};

export const resetStore = () => ({ type: RESET_STORE_ACTION_TYPE });

export default rootReducer;
