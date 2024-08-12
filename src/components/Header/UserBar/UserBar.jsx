import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectorsAuth';
import Icon from 'components/Icon/Icon';
import styles from '../heder.module.css';

const UserBar = ({background, fill}) => {
  const { avatar} = useSelector(selectUser);
  return (
    <div>
      {avatar ? (<img className={styles.img} src={avatar} alt="user" />) :
      ( <Icon width={40} height={40} name={"icon-pipl"}  fillColor={fill} stroke={background}/>)}
       
    </div>
  )
}

export default UserBar