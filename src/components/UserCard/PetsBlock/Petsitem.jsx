import React, {useState} from 'react';
import { parseISO, format } from 'date-fns';
import Icon from 'components/Icon/Icon';
import { capitalizeFirstLetter } from '../../../helpers/functions';
import styles from './petsItem.module.css';

const Petsitem = ({ item }) => {
  const { _id, imgURL, title, name, birthday, sex, species } = item;

  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  const date = Date.now();
  const parsedDate = birthday ? parseISO(birthday) : date;
  const birthdayData = format(parsedDate, 'dd.MM.yyyy');
  const capitalizedSex = capitalizeFirstLetter(sex);
  const capitalizedSpecies = capitalizeFirstLetter(species);

  return (
    <li key={_id} className={styles.wrapItem}>
      {imageError ? (
        <div className={styles.wrapImg}>
          <Icon width={34} height={34} name={'icon-paw'} />
        </div>
      ) : (
        <img
          className={styles.image}
          src={imgURL}
          alt="notice"
          onError={handleImageError}
        />
      )}

      <div className={styles.textPet}>
        <h4>{title}</h4>
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
      </div>
      <button className={styles.btnTrach}>
        <Icon name={'icon-trash-2'} width={16} height={16} fill={'#F6B83D'} />
      </button>
    </li>
  );
};

export default Petsitem;
