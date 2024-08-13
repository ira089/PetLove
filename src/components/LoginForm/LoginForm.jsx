import React from 'react';
import { NavLink } from 'react-router-dom';
import PetBlock from 'components/PetBlock/PetBlock';
import LoginReactForma from 'components/FormaReact/LoginReactForma';
import Dog1M from '../../assets/img/dog1M.png';
import Dog1D from '../../assets/img/dog1D.png';
import Dog1P from '../../assets/img/dogLog1P .png';
import Dog2D from '../../assets/img/dog2D.png';
import Dog2M from '../../assets/img/dog2M.png';
import Dog2P from '../../assets/img/dogLog2P.png';
import styles from '../RegisterForm/registerForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.wrap}>
      <PetBlock
        mobileImage1x={Dog1M}
        mobileImage2x={Dog2M}
        tabletImage1x={Dog1P}
        tabletImage2x={Dog2P}
        desktopImage1x={Dog1D}
        desktopImage2x={Dog2D}
      />
      <div className={styles.wrapForma}>
        <h3 className={styles.titleLog}>Log in</h3>
        <p className={styles.text}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <LoginReactForma />
        <div className={styles.linkWrap}>
          <p className={styles.linkText}>Don’t have an account?</p>
          <NavLink className={styles.link} to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
