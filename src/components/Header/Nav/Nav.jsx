import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../heder.module.css';


const Nav = () => {
  
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
         <li className={styles.navItem}>
            <NavLink className={styles.link} to="/news">News</NavLink>
         </li>
         <li className={styles.navItem}>
            <NavLink className={styles.link} to="/notices">Find pet</NavLink>
         </li>
         <li className={styles.navItem}>
            <NavLink className={styles.link} to="/friends">Our friends</NavLink>
         </li>
      </ul>
    </nav>
  );
};

export default Nav