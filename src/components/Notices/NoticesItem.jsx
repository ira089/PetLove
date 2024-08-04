import React from 'react';
import { parseISO, format } from 'date-fns';
import Icon from 'components/Icon/Icon';
import { capitalizeFirstLetter } from '../../helpers/functions';
import styles from './noticesItem.module.css';
import Button from 'components/Button/Button';

const NoticesItem = ({ item }) => {
  // console.log(item);
  const {
    imgURL,
    title,
    popularity,
    name,
    birthday,
    category,
    sex,
    species,
    comment,
    _id,
  } = item;
  const rating = Math.round(popularity / 10);
  const date =  Date.now()
  const parsedDate = birthday ? parseISO(birthday) : date;
  const birthdayData = format(parsedDate, 'dd.MM.yyyy');
  const capitalizedSex = capitalizeFirstLetter(sex);
  const capitalizedCategory = capitalizeFirstLetter(category);
  const capitalizedSpecies = capitalizeFirstLetter(species);

  const onLoadMore = id => {
    console.log('first');
  };

  //  console.log(rating)
  return (
    <li className={styles.itemWrap}>
      <img className={styles.image} src={imgURL} alt="notice" />
      <div className={styles.titleWrap}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.rating}>
          <Icon width={16} height={16} name={'icon-star'} />
          <span>{rating}</span>
        </div>
      </div>
      <div className={styles.сategory}>
        <div className={styles.сategoryItem}>
          <h6>Name</h6>
          <p>{name}</p>
        </div>
        <div className={styles.сategoryItem}>
          <h6>Birthday</h6>
          <p>{birthdayData}</p>
        </div>
        <div className={styles.сategoryItem}>
          <h6>Sex</h6>
          <p>{capitalizedSex}</p>
        </div>
        <div className={styles.сategoryItem}>
          <h6>Species</h6>
          <p>{capitalizedSpecies}</p>
        </div>
        <div className={styles.сategoryItem}>
          <h6>Category</h6>
          <p>{capitalizedCategory}</p>
        </div>
      </div>
      <p className={styles.text}>{comment}</p>
      <div className={styles.btnWrap}>
        <Button
          style={{ textTransform: 'lowercase' }}
          type="submit"
          onClick={() => onLoadMore(_id)}
        >
          Learn more
        </Button>
        <button className={styles.btn} type="button">
          <Icon width={18} height={18} name={'icon-heart'} />
        </button>
      </div>
    </li>
  );
};

export default NoticesItem;
