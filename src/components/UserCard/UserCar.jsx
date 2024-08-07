import React from 'react'
import EditUserBtn from './EditUserBtn'
import UserBlock from './UserBlock'
import PetsBlock from './PetsBlock'
import UserNav from 'components/Header/UserNav/UserNav';
import styles from './userCard.module.css';

const UserCar = () => {
  return (
    <div className={styles.wrapUserCard}>
        <EditUserBtn/>
        <UserBlock/>
        <PetsBlock/>
        <UserNav/>
    </div>
  )
}

export default UserCar