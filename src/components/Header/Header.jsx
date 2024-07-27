import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo'
import UserBar from './UserBar/UserBar';
import styles from './heder.module.css';

const Header = () => {
  return (
    <header className={styles.wrapHeader}>
        <NavLink to="/">
           <Logo color='red' fill='blue'/>
           {/* <Logo color='#fff' fill='#fff'/> */}
        </NavLink>
        <NavLink to="/profile">
            <UserBar background='#FFF4DF' fill='#F6B83D'/>
        </NavLink>
        
        
    </header>
  )
}

export default Header