import Icon from 'components/Icon/Icon';
import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
  return (
   <section className={styles.home}>
      <p className={styles.text}>petl
          <Icon className={styles.icon} width={35.2} height={30.8} name={"icon-hearFill"} fillColor={'#F6B83D'}/>
          ve
      </p>
   </section>
  )
}

export default Loader