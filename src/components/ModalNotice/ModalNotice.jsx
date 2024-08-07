import React from 'react';
import { parseISO, format } from 'date-fns';
import { capitalizeFirstLetter } from '../../helpers/functions';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import styles from './modalNotice.module.css';

const ModalNotice = ({ item }) => {
  const {
    imgURL,
    title,
    popularity,
    name,
    birthday,
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
  const capitalizedSpecies = capitalizeFirstLetter(species);

  const onClick = () => {
    console.log('first')
  }

  return (
    <div className={styles.wrap}>
      <img className={styles.image} src={imgURL} alt="pet" />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.rating}>
        <Icon width={16} height={16} name={'icon-star'} />
        <span>{rating}</span>
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
      </div>
      <p className={styles.text}>{comment}</p>
      <div className={styles.wrapBtn}>
        <Button className={styles.btn} type={'button'} onClick={onClick}>
        <span>Add to</span>
        <Icon name={'icon-hearFill'} width={18} height={18} fill={'#fff'}/>
        </Button>
        <div className={styles.link}>
          <a href="mailto:someone@example.com">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default ModalNotice;
