import { useDispatch } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {logOutThunk} from '../../redux/auth/operationsAuth'
import CatIcon from '../../assets/img/catIcon.png';
import CatIcon2 from '../../assets/img/catIcon2.png';
import styles from './modalApproveAction.module.css';

const ModalApproveAction = ({onClose}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handeleLogOut = () => {
    navigate('/');
    dispatch(logOutThunk());
    
  };

  return (
    <div className={styles.wrap}>
      <picture>
        <source  srcSet={`${CatIcon} 1x, ${CatIcon2} 2x`}/>
        <img src={CatIcon} alt='cat'/>
      </picture>
     
      <p className={styles.text}>Already leaving?</p>
      <div className={styles.wrapBtn}>
        <button type='submit' className={styles.btnYes} onClick={handeleLogOut}>Yes</button>
        <button type='button' className={styles.btnCancel} onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default ModalApproveAction