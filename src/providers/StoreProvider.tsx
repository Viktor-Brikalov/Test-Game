import React, { FC, PropsWithChildren, useEffect, useMemo, useRef } from 'react';
import { Provider } from 'react-redux';

import { IGame } from '@/utils/types/games';
import { initStore } from '@/store/game';
import { createStore } from '../store';

const StoreProvider: FC<
  PropsWithChildren<{ initialState: IGame[] }>
> = props => {
  const isInit = useRef(true);
  const initializedStore = useMemo(
    () =>
      createStore({
        game: {
          games: props.initialState,
          selectedCurrency: 'Не выбрано',
          selectedProvider: 'Не выбрано',
        },
      }),
    [],
  );

  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    
    initializedStore.dispatch(initStore(props.initialState));
  }, [props.initialState]);

  return (
    <Provider store={initializedStore}>
      {props.children}
    </Provider>
  );
};

export default StoreProvider;
