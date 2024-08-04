import React from 'react';
import Select from 'react-select'
import SearchField from 'components/SearchField/SearchField'
import styles from './noticesFilters.module.css';

const NoticesFilters = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <section className={styles.wrapFilter}>
      <div className={styles.wrapInput}>
      <SearchField/>
      <Select>dfdgdfhgf</Select>
      <Select options={options} placeholder={'custom placeholder component'} />
      <Select options={options} />
      
      </div>
    
    <form className={styles.wrapRadio}>
    <label className={styles.label}>
            <input className={styles.radio} type='radio' name='popular'  hidden/>
            <div className={styles.radio}>
            Popular
            </div>
          </label>
          
          <label className={styles.label}>
            <input className={styles.radio} type='radio' name='unpopular'  hidden/>
            <div className={styles.radio}>
            Unpopular
            </div>
          </label>
          <label className={styles.label}>
            <input className={styles.radio} type='radio' name='cheap'  hidden/>
            <div className={styles.radio}>
            Cheap
            </div>
          </label>
          <label className={styles.label}>
            <input className={styles.radio} type='radio' name='expensive'  hidden/>
            <div className={styles.radio}>
            Expensive
            </div>
          </label>
    </form>
    </section>
    
  )
}

export default NoticesFilters





