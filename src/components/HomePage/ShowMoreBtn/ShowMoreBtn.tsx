import { FC } from 'react';

import { ShowMoreBtnProps } from './ShowMoreBtn.types';
import styles from './ShowMoreBtn.module.css';

const ShowMoreBtn: FC<ShowMoreBtnProps> = ({ btnClickHandler }) => {
  return (
    <div className={styles.show_more_btn_page__button_container}>
      <button
        className={styles.show_more_btn_page__button}
        type="button"
        onClick={btnClickHandler}
      >
        Показать еще
      </button>
  </div>
  );
};

export default ShowMoreBtn;
