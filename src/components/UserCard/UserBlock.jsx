import React from 'react';
import {useSelector } from 'react-redux';
import {selectUser} from '../../redux/auth/selectorsAuth'
import Icon from 'components/Icon/Icon';
import styles from './userBlock.module.css';

const UserBlock = () => {

    const {name, email, phone, avatar} = useSelector(selectUser);

  return (
    <>
    
      <div className={styles.avatar}>
        {avatar ? (<img className={styles.img} src={avatar} alt="user" />) :
        <Icon
        width={94}
        height={94}
        name={'icon-pipl'}
        fillColor="#f6b83d"
        stroke="#fff4df"
      />
        }
        <p>Upload photo</p>
      </div>
      <div className={styles.info}>
        <h4>My information</h4>
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          {phone ? <li>{phone}</li> : <li>+380</li>}
        
        </ul>
      </div>
    </>
  );
};

export default UserBlock;
