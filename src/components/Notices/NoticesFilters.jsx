import React from 'react';
import SearchField from 'components/SearchField/SearchField'
import styles from './noticesFilters.module.css';

const NoticesFilters = () => {
  return (
    <section className={styles.wrapFilter}>
      <div className={styles.wrapInput}>
      <SearchField/>
      </div>
    
    <div className={styles.wrapRadio}></div>
    </section>
    
  )
}

export default NoticesFilters