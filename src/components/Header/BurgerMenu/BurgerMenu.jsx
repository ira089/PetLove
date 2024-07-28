import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './burgerMenu.module.css';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import Icon from '../../Icon/Icon';
import classNames from 'classnames';

const BurgerMenu = ({isOpen, open, background, color, borderColor,
    borderColorHover, borderColorLog }) => {
        const location = useLocation();
  return (
    <nav style={{ backgroundColor: background }} className={classNames(styles.burger, { [styles.active]: open })}>
      <button className={styles.btnClose} onClick={isOpen}>
      {location.pathname === '/' ? 
        <Icon width={32} height={32} name={'icon-close'}/> :
        <Icon width={32} height={32} name={'icon-close2'}/>}
      </button>
      <Nav color={color} borderColor={borderColor} borderColorHover={borderColorHover}/>
      <AuthNav borderColorLog={borderColorLog}/>
    </nav>
  );
};

export default BurgerMenu;
