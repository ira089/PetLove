import FriendsList from 'components/Friends/FriendsList';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './OurFriendsPage.module.css';
import { friendsThunk } from '../../redux/friends/operationsFriends';

const OurFriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(friendsThunk());
  }, [dispatch]);

  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>Our friends</h2>
      <FriendsList />
    </section>
  );
};

export default OurFriendsPage;
