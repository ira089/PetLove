import React, {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom';
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
const location = useLocation();

  return (
    <header className={styles.wrapHeader}>
        <NavLink className={styles.link} to="/home">
           <Logo color= {color} fill={fill}/>
        </NavLink>
        <div className={styles.rightMenu}>
          {location.pathname !== '/register' && (<NavLink className={styles.link}  to="/profile">
               <UserBar background={background} fill={fill}/>
            </NavLink>)}
           
            {location.pathname === '/' ? 
             (<BurgerMenu isOpen= {isOpen} open={open} background='#fff' color='#262626'
              borderColor='rgba(38, 38, 38, 0.15)' borderColorHover='#f6b83d'  borderColorLog='transparent'/>) :
             (<BurgerMenu isOpen= {isOpen} open={open} background='#f6b83d' color='#fff'
              borderColor='rgba(255, 255, 255, 0.15)' borderColorHover='rgba(255, 255, 255, 0.5)' borderColorLog='rgba(255, 255, 255, 0.5)'/>)}
            
             <button className={styles.burgerBtn} onClick={isOpen}> 
             {location.pathname === '/' ? 
                <Icon   width={32} height={32} name={"icon-menu-01"}  />  :
                <Icon   width={32} height={32} name={"icon-menu-03"} />}
              </button>

        </div>
       
       
        
        
    </header>
  )
}

export default Header