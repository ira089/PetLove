import React, {  useEffect }  from 'react'
import NewsList from 'components/News/NewsList'
import { useDispatch,useSelector } from 'react-redux';
import * as selestorNews from '../../redux/new/selectorNew'
// import PaginationMy from 'components/Pagination/PaginationMy'
import { newsThunk } from '../../redux/new/opertionsNew';
import SearchField from 'components/SearchField/SearchField';
import styles from './NewPage.module.css';


export const NewsPage = () => {
  const dispatch = useDispatch();
  const {page, query} = useSelector(selestorNews.selectSearch);
  
// console.log(query)
// console.log(page)
 useEffect(() => {
     if(query === '' ){
      return
    }

     dispatch(newsThunk({ query, page }));
   }, [dispatch, page, query]);

  return (
    <section className={styles.wrapNews}>
      <h2 className={styles.title}>News</h2>
 <SearchField/>
 <NewsList/>
 {/* <PaginationMy/> */}
    </section>
   
  )
}
