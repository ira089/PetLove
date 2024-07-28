
import React from 'react';
import styles from './homepage.module.css';
import Header from 'components/Header/Header';

const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapText}>
            <Header background='#FFF4DF' fill='#fff' color='#fff'/>
            <h1 className={styles.title}>Take good <span>care</span> of your small pets</h1>
            <p className={styles.text}>Choosing a pet for your home is a choice that is 
                meant to enrich your life with immeasurable joy and tenderness.
             </p>
      </div>
      <div className={styles.image}>
          
       </div>

    </section>
      
    
  )
}

export default HomePage