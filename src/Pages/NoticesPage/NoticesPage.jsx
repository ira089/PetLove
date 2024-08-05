import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{selectSearch} from '../../redux/search/selectorSearch'
import { noticesThunk } from '../../redux/notices/operationsNotices';
// import * as params from '../../api/filterApi'
import NoticesFilters from 'components/Notices/NoticesFilters';
import NoticesList from 'components/Notices/NoticesList';
import styles from './noticesPage.module.css';


const NoticesPage = () => {
  const dispatch = useDispatch();
  // const {notices} = useSelector(selectNotices);
  const {page, query,  category, type, location} = useSelector(selectSearch);
// params.fetchSex()

  // console.log(notices)
  // console.log(page)
  useEffect(() => {
    dispatch(noticesThunk({ page, query,  category, type, location }))
  }, [category, dispatch, location, page, query, type]);

  return (
    <section className={styles.wrapNotices}>
      <h2 className={styles.title}>Find your favorite pet</h2>
      <NoticesFilters />
      <NoticesList />
    </section>
  );
};

export default NoticesPage;
