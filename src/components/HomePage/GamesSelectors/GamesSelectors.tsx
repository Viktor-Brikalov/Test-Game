import { ChangeEvent, FC, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setProvider, setCurrency } from '@/store/game';

import { IGame } from '@/utils/types/games';

import { gameSelectors } from '../assets';
import styles from './GamesSelectors.module.css';

const GamesSelectors: FC = () => {
  const dispatch = useAppDispatch();
  const { games, selectedCurrency, selectedProvider } = useAppSelector(
    store => store.game,
  );

  const selectorValue = useMemo(() => {
    return {
      real: selectedCurrency,
      provider: selectedProvider,
    };
  }, [selectedCurrency, selectedProvider]);
    
  const options = useMemo(() => {
    const provider = games?.reduce((acc: string[], cur: IGame) => {
      if (!acc.includes(cur.provider)) {
        acc.push(cur.provider);
      }
      return acc;
    }, ['Не выбрано']);

    const real = games?.reduce((acc: string[], cur: IGame) => {
      const currencyKeys = Object.keys(cur.real);
      currencyKeys.forEach((key) => {
        if (!acc.includes(key)) {
          acc.push(key);
        }
      });
      return acc;
    }, ['Не выбрано']);
    
    return {
      provider,
      real,
    };
  }, [games]);

  const selectProvider = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(setProvider(value));
  };

  const selectCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    dispatch(setCurrency(value));
  };

  const selectHandlers = {
    provider: selectProvider,
    real: selectCurrency,
  };

  return (
    <div className={styles.games_selectors__selectors}>
      {gameSelectors?.map(selector => (
        <select
          key={selector.name}
          onChange={selectHandlers[selector.name]}
          value={selectorValue[selector.name]}
        >
          {options[selector.name]?.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default GamesSelectors;
