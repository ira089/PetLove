import React, {useState} from 'react';
import {  useSelector } from 'react-redux'
import { parseISO, format } from 'date-fns';
import {selectIsLoggedIn} from '../../redux/auth/selectorsAuth'
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal/Modal';
import { capitalizeFirstLetter } from '../../helpers/functions';
import Button from 'components/Button/Button';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import styles from './noticesItem.module.css';

const NoticesItem = ({ item }) => {
  const isLogin = useSelector(selectIsLoggedIn);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
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
  } = item;
  const rating = Math.round(popularity / 10);
  const date =  Date.now()
  const parsedDate = birthday ? parseISO(birthday) : date;
  const birthdayData = format(parsedDate, 'dd.MM.yyyy');
  const capitalizedSex = capitalizeFirstLetter(sex);
  const capitalizedCategory = capitalizeFirstLetter(category);
  const capitalizedSpecies = capitalizeFirstLetter(species);

  // const onLoadMore = id => {
  //   console.log('first');
  // };

  //  console.log(rating)
  return (
    <>
     <li className={styles.itemWrap}>
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
        <button className={styles.btn} type="button">
          <Icon width={18} height={18} name={'icon-heart'} />
        </button>
      </div>
    </li>
    {isLogin ? <Modal isOpen={isModalOpen} onClose={closeModal} height={446} width={335}>
        <ModalNotice onClose={closeModal} item={item}/>
      </Modal> :
      <Modal isOpen={isModalOpen} onClose={closeModal} height={394} width={335}>
      <ModalAttention onClose={closeModal}/>
    </Modal>}
    
    </>
   
  );
};

export default NoticesItem;
