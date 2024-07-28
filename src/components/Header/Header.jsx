import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Logo from './Logo/Logo'
import UserBar from './UserBar/UserBar';
import styles from './heder.module.css';
// import Nav from './Nav/Nav';
// import AuthNav from './AuthNav/AuthNav';
import Icon from '../Icon/Icon';
// import classNames from 'classnames';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = ({color, fill, background}) => {
const [open, setOpen] = useState(false);
const isOpen = () => setOpen(!open);

  return (
    <header className={styles.wrapHeader}>
        <NavLink className={styles.link} to="/home">
           <Logo color= {color} fill={fill}/>
        </NavLink>
        <div className={styles.rightMenu}>
           <NavLink className={styles.link}  to="/profile">
               <UserBar background={background} fill={fill}/>
            </NavLink>
            <BurgerMenu isOpen= {isOpen} open={open}/>
            {/* <nav className={classNames(styles.burger, { [styles.active]: open })}>
                <button className={styles.btnClose} onClick={() => setOpen(false)}>
                    <Icon width={32} height={32} name={"icon-cross-small"}  fillColor={'#262626'} stroke={'none'}/>
                 </button>
                <Nav/>
                <AuthNav/>
             </nav> */}
             <button className={styles.burgerBtn} onClick={isOpen}> 
                <Icon   width={32} height={32} name={"icon-menu-01"}  fillColor={'#fff'} stroke='none'/>  
              </button>

        </div>
       
       
        
        
    </header>
  )
}

export default Header