import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {currentFullThunk} from '../../redux/auth/operationsAuth'
import MyNotices from 'components/MyNotices/MyNotices'
import UserCar from 'components/UserCard/UserCar';
import styles from './profilePage.module.css';

const ProfilePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentFullThunk());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <UserCar/>
      <MyNotices/>
    </section>
  )
}

export default ProfilePage