import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import {
  selectIsLoggedIn,
  selectFaforitesId,
} from '../../redux/auth/selectorsAuth';
import {
  addFavoritesThunk,
  delFavoritesThunk,
} from '../../redux/auth/operationsAuth';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal/Modal';
import { capitalizeFirstLetter } from '../../helpers/functions';
import Button from 'components/Button/Button';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import styles from './noticesItem.module.css';

const NoticesItem = ({ item, isVariant }) => {
  const { variant } = isVariant;
  const dispatch = useDispatch();
  const location = useLocation();

  const isLogin = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFaforitesId);

  const [togleBtnColor, setTogleBtnColor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
  const date = Date.now();
  const parsedDate = birthday ? parseISO(birthday) : date;
  const birthdayData = format(parsedDate, 'dd.MM.yyyy');
  const capitalizedSex = capitalizeFirstLetter(sex);
  const capitalizedCategory = capitalizeFirstLetter(category);
  const capitalizedSpecies = capitalizeFirstLetter(species);
  const isFavorite = favorites.includes(_id);

  const onFavorite = itemId => {
    if (!isLogin) {
      setIsModalOpen(true);
      return;
    }
    if (isFavorite) {
      dispatch(delFavoritesThunk(itemId));
      setTogleBtnColor(false);
    } else {
      dispatch(addFavoritesThunk(itemId));
      setTogleBtnColor(true);
    }
  };

  const delFavorite = itemId => {
    dispatch(delFavoritesThunk(itemId));
  };

  return (
    <>
      <div key={_id} className={styles.itemWrap}>
        <img className={styles.image} src={imgURL} alt="pet" />
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
            type="button"
            onClick={openModal}
          >
            Learn more
          </Button>
          {location.pathname === '/notices' && (
            <div
              className={styles.wrapBtnHeart}
              style={{
                background: isFavorite || togleBtnColor ? '#fbe7c1' : '#fff4df',
              }}
            >
              <button
                className={styles.btn}
                type="button"
                onClick={() => onFavorite(_id)}
              >
                <Icon width={18} height={18} name={'icon-heart'} />
              </button>
            </div>
          )}

          {variant && (
            <div
              className={styles.wrapBtnHeart}
              style={{ background: '#fff4df' }}
            >
              <button
                className={styles.btn}
                type="button"
                onClick={() => delFavorite(_id)}
              >
                <Icon width={18} height={18} name={'icon-trash-2'} />
              </button>
            </div>
          )}
        </div>
      </div>
      {isLogin ? (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          height={446}
          width={335}
        >
          <ModalNotice
            onClose={closeModal}
            item={item}
            isFavorite={isFavorite}
          />
        </Modal>
      ) : (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          height={394}
          width={335}
        >
          <ModalAttention onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default NoticesItem;
