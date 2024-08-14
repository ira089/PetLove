import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';
import Logo from 'components/Header/Logo/Logo';
import UserBar from 'components/Header/UserBar/UserBar';
import BurgerMenu from 'components/Header/BurgerMenu/BurgerMenu';
import Icon from 'components/Icon/Icon';
import styles from './homepage.module.css';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const isOpen = () => setOpen(!open);
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <section className={styles.container}>
      <div className={styles.wrapText}>
        
        <header className={styles.wrapHeader}>
          <NavLink className={styles.link} to="/">
            <Logo color="#fff" fill="#fff" />
          </NavLink>
          <div className={styles.rightMenu}>
            {isLogin && (
              <NavLink className={styles.link} to="/profile">
                <UserBar background="#FFF4DF" fill="#F6B83D" color="#fff" />
              </NavLink>
            )}

            <BurgerMenu
              isOpen={isOpen}
              open={open}
              background="#fff"
              color="#262626"
              borderColor="rgba(38, 38, 38, 0.15)"
              borderColorHover="#f6b83d"
              borderColorLog="transparent"
            />

            <button className={styles.burgerBtn} onClick={isOpen}>
              <Icon className={styles.burgerIcon} name={'icon-menu-01'} />
            </button>
          </div>
        </header>
        <h1 className={styles.title}>
          Take good <span>care</span> of your small pets
        </h1>
        <p className={styles.text}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <div className={styles.image}></div>
    </section>
  );
};

export default HomePage;
