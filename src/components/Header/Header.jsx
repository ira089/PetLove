import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo'
import UserBar from './UserBar/UserBar';
import styles from './heder.module.css';

const Header = ({color, fill, background}) => {
  return (
    <header className={styles.wrapHeader}>
        <NavLink className={styles.link} to="/home">
           <Logo color= {color} fill={fill}/>
        </NavLink>
        <NavLink className={styles.link} to="/profile">
            <UserBar background={background} fill={fill}/>
        </NavLink>
        
        
    </header>
  )
}

export default Header