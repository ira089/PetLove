import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noticesThunk } from '../../redux/notices/operationsNotices';
// import * as selestorNews from '../../redux/new/selectorNew';
import NoticesFilters from 'components/Notices/NoticesFilters';
import NoticesList from 'components/Notices/NoticesList';
import styles from './noticesPage.module.css';
import { selectNotices } from '../../redux/notices/selectornotices';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const {notices} = useSelector(selectNotices);

  console.log(notices)
  // console.log(page)
  useEffect(() => {
    dispatch(noticesThunk())
  }, [dispatch]);

  return (
    <section className={styles.wrapNotices}>
      <h2 className={styles.title}>Find your favorite pet</h2>
      <NoticesFilters />
      <NoticesList />
    </section>
  );
};

export default NoticesPage;
