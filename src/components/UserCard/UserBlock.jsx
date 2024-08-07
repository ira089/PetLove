import React from 'react';
import styles from './userBlock.module.css';
import Icon from 'components/Icon/Icon';

const UserBlock = () => {
  return (
   <>
   <div className={styles.avatar}>
    
        <Icon width={94} height={94} name={"icon-pipl"}  fillColor='#f6b83d' stroke='#fff4df' />
    
    <p>Upload photo</p>

   </div>
   <div className={styles.info}></div>
   </>
  )
}

export default UserBlock