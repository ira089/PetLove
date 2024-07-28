import React from 'react';
import styles from '../heder.module.css';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import Icon from '../../Icon/Icon';
import classNames from 'classnames';

const BurgerMenuHome = ({isOpen, open}) => {

  return (
    <nav className={classNames(styles.burger, { [styles.active]: open })}>
      <button className={styles.btnClose} onClick={isOpen}>
        <Icon
          width={32}
          height={32}
          name={'icon-cross-small'}
          fillColor={'#262626'}
          stroke={'none'}
        />
      </button>
      <Nav />
      <AuthNav />
    </nav>
  );
};

export default BurgerMenuHome;