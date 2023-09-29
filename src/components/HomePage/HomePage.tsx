import { FC, useState } from 'react';

import GamesList from './GamesList/GamesList';
import ShowMoreBtn from './ShowMoreBtn/ShowMoreBtn';
import GamesSelectors from './GamesSelectors/GamesSelectors';
import styles from './HomePage.module.css';

const HomePage: FC = () => {
  const [visibleGamesCount, setVisibleGamesCount] = useState(12);

  const showMoreClickHandler = () => {
    setVisibleGamesCount((prev) => prev + 12);
  };

  return (
    <div className={styles.home_page__page_layout}>
      <GamesSelectors />
      <GamesList visibleGamesCount={visibleGamesCount} />
      <ShowMoreBtn btnClickHandler={showMoreClickHandler} />
    </div>
  );
};

export default HomePage;
