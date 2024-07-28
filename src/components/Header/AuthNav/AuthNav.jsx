import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../heder.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink className={styles.linkLogin} to="/login">
        Log In
      </NavLink>
      <NavLink className={styles.linkReg} to="/register">
      Registration
      </NavLink>
      
    </div>
  );
};

export default AuthNav