import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../heder.module.css';


const Nav = () => {
  
  return (
    
      <ul className={styles.navList}>
         <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/news">News</NavLink>
         </li>
         <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/notices">Find pet</NavLink>
         </li>
         <li className={styles.navItem}>
            <NavLink className={styles.navLink} to="/friends">Our friends</NavLink>
         </li>
      </ul>
    
  );
};

export default Nav