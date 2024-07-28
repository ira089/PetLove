import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo'
import UserBar from './UserBar/UserBar';
import styles from './heder.module.css';
import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import Icon from 'components/Icon/Icon';
import classNames from 'classnames';

const Header = ({color, fill, background}) => {
const [open, setOpen] = useState(false);

  return (
    <header className={styles.wrapHeader}>
        <NavLink className={styles.link} to="/home">
           <Logo color= {color} fill={fill}/>
        </NavLink>
        <NavLink className={styles.link}  to="/profile">
            <UserBar background={background} fill={fill}/>
        </NavLink>
        <nav className={classNames(styles.burger, { [styles.active]: open })}>
           <Nav/>
           <AuthNav/>
        </nav>
        <button className={styles.burgerBtn} onClick={() => setOpen(!open)}> 
           <Icon   width={32} height={32} name={"icon-menu-01"}  fillColor={'#fff'} stroke='none'/>  
        </button>
       
        
        
    </header>
  )
}

export default Header