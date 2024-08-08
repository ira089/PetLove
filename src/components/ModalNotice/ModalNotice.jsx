import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import { StyledRating } from './customStyle';
import { capitalizeFirstLetter } from '../../helpers/functions';
import { fetchNoticesId } from '../../api/noticesApi';
import {
  addFavoritesThunk,
  delFavoritesThunk,
} from '../../redux/auth/operationsAuth';
import Icon from 'components/Icon/Icon';
import styles from './modalNotice.module.css';

const ModalNotice = ({ item, isFavorite }) => {
  const dispatch = useDispatch();
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
  const date = Date.now();
  const parsedDate = birthday ? parseISO(birthday) : date;
  const birthdayData = format(parsedDate, 'dd.MM.yyyy');
  const capitalizedSex = capitalizeFirstLetter(sex);
  const capitalizedSpecies = capitalizeFirstLetter(species);

  const delFavorite = itemId => {
    dispatch(delFavoritesThunk(itemId));
  };

  const addFavorite = itemId => {
    dispatch(addFavoritesThunk(itemId));
  };

  const [emailPetUser, setEmailPetUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataPetId = await fetchNoticesId(_id);
        const email = dataPetId.user.email;
        setEmailPetUser(email);
      } catch (error) {
        return error.message;
      }
    };
    getData();
  }, [_id]);

  return (
    <div className={styles.wrap}>
      <img className={styles.image} src={imgURL} alt="pet" />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.rating}>
        <StyledRating
          name="read-only"
          value={rating}
          readOnly
          defaultValue={0}
          max={4}
          size="large"
        />
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
        {isFavorite ? (
          <button
            className={styles.btn}
            type={'button'}
            onClick={() => delFavorite(_id)}
          >
            <span>Remove from</span>
            <Icon name={'icon-heart-white'} width={18} height={18} />
          </button>
        ) : (
          <button
            className={styles.btn}
            type={'button'}
            onClick={() => addFavorite(_id)}
          >
            <span>Add to</span>
            <Icon name={'icon-heart-white'} width={18} height={18} />
          </button>
        )}
        <button className={styles.link}>
          <a href={`mailto:${emailPetUser}`}>Contact</a>
        </button>
      </div>
    </div>
  );
};

export default ModalNotice;
