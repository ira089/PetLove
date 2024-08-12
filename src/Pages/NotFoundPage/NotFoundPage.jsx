import React from 'react';
import { NavLink } from 'react-router-dom';
import cat1M from '../../assets/img/cat4041M.jpg';
import cat2D from '../../assets/img/cat4042D.jpg';
import cat2M from '../../assets/img/cat4042M.jpg';
import cat2P from '../../assets/img/cat4042P.jpg';
import cat1P from '../../assets/img/cat4041P.jpg';
import cat1D from '../../assets/img/cat4041D.jpg';
import styles from './notFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={styles.wrap404}>
      <div>
        <div className={styles.titleWrap}>
          <p className={styles.title}>4</p>
          <div className={styles.wrapImg}>
            <picture className={styles.img}>
              <source
                media="(min-width: 320px)"
                srcSet={`${cat1M} 1x, ${cat2M} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${cat1P} 1x, ${cat2P} 2x`}
              />
              <source
                media="(min-width: 1280px)"
                srcSet={`${cat1D} 1x, ${cat2D} 2x`}
              />
              <img className={styles.img} src={cat1D} alt="cat404" />
            </picture>
          </div>
          <p className={styles.title}>4</p>
        </div>

        <div className={styles.textWrap}>
          <p className={styles.text}>Ooops! This page not found :(</p>
            <NavLink className={styles.link} to="/">
            To home page
          </NavLink>

        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
