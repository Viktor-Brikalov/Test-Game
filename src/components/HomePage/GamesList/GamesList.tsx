import { FC, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useAppSelector } from '@/store/hooks';

import { UrlsEnum } from '@/utils/routes';

import styles from './GamesList.module.css';
import { GamesListProps } from './GamesList.types';

const GamesList: FC<GamesListProps> = ({ visibleGamesCount }) => {
  const { games, selectedCurrency, selectedProvider } = useAppSelector(
    store => store.game,
  );

  const visibleGames = useMemo(() => {
    const isProviderNotSelected = selectedProvider === 'Не выбрано';
    const isCurrencyNotSelected = selectedCurrency === 'Не выбрано';

    return games
      ?.filter((game) => (isProviderNotSelected || game.provider === selectedProvider) &&
        (isCurrencyNotSelected || (Object.keys(game.real).includes(selectedCurrency)))
      )
      .sort((a, b) => b.collections.popularity - a.collections.popularity)
      .slice(0, visibleGamesCount);
  }, [games, selectedCurrency, selectedProvider, visibleGamesCount]);

  return (
    <div className={styles.games_list__games_list}>
        {visibleGames
          ?.map((game) => (
            <div
              key={game.id}
            >
              <Link
                href={`${UrlsEnum.GAME_PAGE}/${
                  (game?.id || '').replace('/', '_')
                }`}
              >
                <Image
                  src={`${UrlsEnum.IMAGE_URL}/${game.id}.png`}
                  alt="Game's cover"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.games_list__cover_img}
                />
              </Link>
              <p className={styles.games_list__game_name}>
                {game.title}
              </p>
            </div>
          ))
        }
      </div>
  );
};

export default GamesList;
