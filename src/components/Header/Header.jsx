import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';
import Logo from './Logo/Logo';
import UserBar from './UserBar/UserBar';
import Icon from '../Icon/Icon';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import UserNav from './UserNav/UserNav';
import AuthNav from './AuthNav/AuthNav';
import Nav from './Nav/Nav';
import styles from './heder.module.css';

const Header = ({ color, fill, background, borderColor, borderColorHover }) => {
  const [open, setOpen] = useState(false);
  const isOpen = () => setOpen(!open);
  const location = useLocation();
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.wrapHeader}>
      <NavLink className={styles.link} to="/">
        <Logo color={color} fill={fill} />
      </NavLink>
      <div className={styles.wrapNav}>
        <Nav
          color={color}
          borderColor={borderColor}
          borderColorHover={borderColorHover}
        />
      </div>

      <div className={styles.rightMenu}>
        {location.pathname !== '/' ? (
          <div className={styles.navMenu}>
            {isLogin ? (
              <UserNav background="#f9b020" color="#fff" />
            ) : (
              <AuthNav flexDirection="row" />
            )}
          </div>
        ) : (
          <div className={styles.navMenu}>{!isLogin && <AuthNav />}</div>
        )}

        {location.pathname !== '/register' &&
          location.pathname !== '/login' &&
          location.pathname !== '/news' &&
          location.pathname !== '/friends' &&
          isLogin && (
            <NavLink className={styles.link} to="/profile">
              <UserBar background={background} fill={fill} color={color} />
            </NavLink>
          )}

        {location.pathname === '/' ? (
          <BurgerMenu
            isOpen={isOpen}
            open={open}
            background="#fff"
            color="#262626"
            borderColor="rgba(38, 38, 38, 0.15)"
            borderColorHover="#f6b83d"
            borderColorLog="transparent"
          />
        ) : (
          <BurgerMenu
            isOpen={isOpen}
            open={open}
            background="#f6b83d"
            color="#fff"
            borderColor="rgba(255, 255, 255, 0.15)"
            borderColorHover="rgba(255, 255, 255, 0.5)"
            borderColorLog="rgba(255, 255, 255, 0.5)"
          />
        )}

        <button className={styles.burgerBtn} onClick={isOpen}>
          {location.pathname === '/' ? (
            <Icon className={styles.burgerIcon} name={'icon-menu-01'} />
          ) : (
            <Icon className={styles.burgerIcon} name={'icon-menu-03'} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
