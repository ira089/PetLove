import React from 'react';
import { parseISO, format } from 'date-fns';
import Icon from 'components/Icon/Icon';
import { capitalizeFirstLetter } from '../../../helpers/functions';
import styles from './petsItem.module.css';

const Petsitem = () => {

    const date =  Date.now()
//   const parsedDate = birthday ? parseISO(birthday) : date;
//   const birthdayData = format(parsedDate, 'dd.MM.yyyy');
//   const capitalizedSex = capitalizeFirstLetter(sex);
//   const capitalizedSpecies = capitalizeFirstLetter(species);

  return (
    <li className={styles.wrapItem}>
      <img className={styles.image} src={imgURL} alt="notice" />
      <div className={styles.textPet}>
        {/* <h4>{title}</h4> */}
        <div className={styles.сategory}>
          <div className={styles.сategoryItem}>
            <h6>Name</h6>
            {/* <p>{name}</p> */}
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
      </div>
      <button className={styles.btnTrach}>
        <Icon name={'icon-trash-2'} width={16} height={16} fill={'#F6B83D'} />
      </button>
    </li>
  );
};

export default Petsitem;
