import React from 'react'
import MyNotices from 'components/MyNotices/MyNotices'
import UserCar from 'components/UserCard/UserCar';
import styles from './profilePage.module.css';

const ProfilePage = () => {
  return (
    <section className={styles.container}>
      <UserCar/>
      <MyNotices/>
    </section>
  )
}

export default ProfilePage