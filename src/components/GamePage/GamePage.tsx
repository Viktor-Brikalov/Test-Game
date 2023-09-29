import { FC } from 'react';
import Head from 'next/head';

import OnHomeLink from '@/uikit/OnHomeLink/OnHomeLink';

import { GamesPageProps } from './GamePage.types';
import styles from './GamePage.module.css';

const GamesPage: FC<GamesPageProps> = ({ game }) => {
  return (
    <>
      <Head>
        <title>Game {game.title}</title>
      </Head>
      <div className={styles.games_page__page_layout}>
        <OnHomeLink />
        <div className={styles.games_page__title_container}>
          <h1>
            {game?.title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default GamesPage;
