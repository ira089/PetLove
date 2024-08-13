import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectorsAuth';
import Icon from 'components/Icon/Icon';
import styles from '../heder.module.css';

const UserBar = ({ background, fill, color }) => {
  const { avatar, name } = useSelector(selectUser);
  return (
    <div className={styles.nameWrap}>
      {avatar ? (
        <img className={styles.img} src={avatar} alt="user" />
      ) : (
        <Icon
          className={styles.iconUserBar}
          name={'icon-pipl'}
          fillColor={fill}
          stroke={background}
        />
      )}
      <p style={{ color: color }} className={styles.name}>
        {name}
      </p>
    </div>
  );
};

export default UserBar;
