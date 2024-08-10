import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import styles from './petsBlock.module.css';

const AddPet = () => {
  return (
    <div className={styles.wrapAddPet}>
      <h4>My pets</h4>
      <NavLink className={styles.btn} to="/add-pet">
        <span>Add pet</span>
        <Icon name={'icon-plus'} width={18} height={18} fill={'#fff'} />
      </NavLink>
    </div>
  );
};

export default AddPet;
