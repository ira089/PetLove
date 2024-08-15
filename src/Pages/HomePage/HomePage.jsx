import React from 'react';
import styles from './homepage.module.css';
import Header from 'components/Header/Header';

const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapText}>
        <Header
          background="#FFF4DF"
          fill="#fff"
          color="#fff"
          borderColor="rgba(255, 255, 255, 0.4)"
          borderColorHover="rgba(255, 255, 255, 0.4)"
        />
        <div className={styles.titleWrap}>
          <div className={styles.titleDiv}>
            <h1 className={styles.title}>
              Take good <span>care</span> of your small pets
            </h1>
          </div>

          <div className={styles.textDiv}>
            <p className={styles.text}>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.image}></div>
    </section>
  );
};

export default HomePage;
