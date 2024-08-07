import React from 'react';
import { NavLink } from 'react-router-dom';
import DogIcon from '../../assets/img/dogIcon.png';
import styles from './modalAttention.module.css';

const ModalAttention = () => {
  return (
    <div className={styles.wrap}>
      <img src={DogIcon} alt="dog" />
      <h4>Attention</h4>
      <p>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={styles.wrapBtn}>
        <NavLink className={styles.linkLogin} to="/login">
          Log In
        </NavLink>
        <NavLink className={styles.linkReg} to="/register">
          Registration
        </NavLink>
      </div>
    </div>
  );
};

export default ModalAttention;
