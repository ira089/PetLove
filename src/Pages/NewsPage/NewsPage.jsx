import React from 'react'
import NewsList from 'components/News/NewsList'
import PaginationMy from 'components/Pagination/PaginationMy'
import SearchField from 'components/SearchField/SearchField';
import styles from './NewPage.module.css';


export const NewsPage = () => {
  return (
    <section className={styles.wrapNews}>
      <h2 className={styles.title}>News</h2>
 <SearchField/>
 <NewsList/>
 <PaginationMy/>
    </section>
   
  )
}
