import React from 'react';
import Icon from 'components/Icon/Icon';
import styles from './petsBlock.module.css';

const AddPet = () => {
  return (
    <div className={styles.wrapAddPet}>
        <h4>My pets</h4>
        <button className={styles.btn}>
            <span>Add pet</span>
            <Icon name={'icon-plus'} width={18} height={18} fill={'#fff'}/>
        </button>

    </div>
  )
}

export default AddPet