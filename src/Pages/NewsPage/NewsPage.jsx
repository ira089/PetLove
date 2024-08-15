import React, { useEffect } from 'react';
import NewsList from 'components/News/NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../redux/search/selectorSearch';
import { newsThunk } from '../../redux/new/opertionsNew';
import SearchField from 'components/SearchField/SearchField';
import styles from './NewPage.module.css';

const NewsPage = () => {
  const dispatch = useDispatch();
  const { page, query } = useSelector(selectSearch);

  useEffect(() => {
    dispatch(newsThunk({ query, page }));
  }, [dispatch, page, query]);

  return (
    <section className={styles.wrapNews}>
      <div className={styles.wrapTitle}>
        <h2 className={styles.title}>News</h2>
        <SearchField />
      </div>

      <NewsList />
    </section>
  );
};

export default NewsPage;
