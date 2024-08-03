import React from 'react';
import styles from './friendsItem.module.css';

const FriendsItem = ({ item }) => {
  const { workDays, imageUrl, title, email, phone, address } = item;
  // console.log(workDays);
  console.log(item);

  // const qwe =
  //   workDays && workDays.length ? workDays[0].from || workDays[5].from : 0;
  // console.log(qwe);

  return (
    <li className={styles.itemFriend}>
      <div className={styles.time}>
        {workDays && workDays.length ? (
          <span>{workDays[0].from || workDays[5].from}</span>
        ) : (
          <span>Day and night</span>
        )}
        {workDays && workDays.length && (
          <span>{workDays[0].to || workDays[5].to}</span>
        )}
      </div>
      <div>
        <img className={styles.img} src={imageUrl} alt="logo" />
        <div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.text}>
            <p>
              <span>Email</span>
              <a href="#">{email}</a>
            </p>
            <p>
              <span>Address</span>
              <a href="#">{address}</a>
            </p>
            <p>
              <span>Phone</span>
              <a href="#">{phone}</a>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;
