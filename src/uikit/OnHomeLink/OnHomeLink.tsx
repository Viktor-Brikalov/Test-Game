import { FC } from 'react';
import Link from 'next/link';

import styles from './OnHomeLink.module.css';

const OnHomeLink: FC = () => {
  return (
    <Link
      href='/'
      className={styles.games_page__link}
    >
      На главную
    </Link>
  );
};

export default OnHomeLink;
