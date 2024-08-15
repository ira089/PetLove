/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './friendsItem.module.css';
import Typography from '@mui/material/Typography';

const FriendsItem = ({ item }) => {
  const { workDays, imageUrl, title, email, phone, address, _id } = item;

  const isLength = Boolean(workDays?.length);
  const isAddress = Boolean(address);
  const isPhone = Boolean(phone);

  return (
    <li key={_id} className={styles.itemFriend}>
      <div className={styles.time}>
        {isLength ? (
          <span>{workDays[0].from || workDays[5].from}</span>
        ) : (
          <span>Day and night</span>
        )}
        {isLength && <span> - {workDays[0].to || workDays[5].to}</span>}
      </div>

      <div className={styles.textImgWrap}>
        <img className={styles.img} src={imageUrl} alt="logo" />
        <div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.text}>
            <Typography noWrap>
              <span>Email: </span>
              <a href="#">{email}</a>
            </Typography>
            <Typography noWrap>
              <span>Address: </span>
              {isAddress ? (
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address}
                </a>
              ) : (
                'website only'
              )}
            </Typography>
            <Typography noWrap>
              <span>Phone: </span>
              {isPhone ? <a href="#">{phone}</a> : 'email only'}
            </Typography>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;
