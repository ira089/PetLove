/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const FriendsItem = ({ item }) => {
  const { workDays, imageUrl, title, email, phone, address } = item;
  console.log(workDays);
  console.log(item);
  return (
    <li>
      <div>
        <p>11:00</p>
        <p>16:00</p>
      </div>
      <img src={imageUrl} alt="logo" />
      <div>
        <h3>{title}</h3>
        <div>
          <p>
            <span>Email</span>
            <a href='#'>{email}</a>
          </p>
          <p>
            <span>Address</span>
            <a href='#'>{address}</a>
          </p>
          <p>
            <span>Phone</span>
            <a href='#'>{phone}</a>
          </p>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;
