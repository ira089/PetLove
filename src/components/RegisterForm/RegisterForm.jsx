import PetBlock from 'components/PetBlock/PetBlock'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Cat1M from '../../assets/img/cat1M.png';
import Cat1D from '../../assets/img/cat1D.png';
import Cat1P from '../../assets/img/cat1P.png';
import Cat2D from '../../assets/img/cat2D.png';
import Cat2M from '../../assets/img/cat2M.png';
import Cat2P from '../../assets/img/cat2P.png';
import FormaReactReg from 'components/FormaReact/FormaReactReg';
import styles from './registerForm.module.css';

const RegisterForm = () => {
  return (
    <div className={styles.wrap}>
      <PetBlock
      mobileImage1x={Cat1M}
       mobileImage2x={Cat2M}
       tabletImage1x={Cat1P}
      tabletImage2x={Cat2P}
       desktopImage1x={Cat1D}
        desktopImage2x={Cat2D}
      />
      <div className={styles.wrapForma}>
         <h3 className={styles.title}>Registration</h3>
         <p className={styles.text}>Thank you for your interest in our platform.</p>
         <FormaReactReg/>
         <div className={styles.linkWrap}>
           <p className={styles.linkText}>Already have an account?</p>
           <NavLink className={styles.link} to="/login">Login</NavLink>

         </div>
      </div >
    </div>
  )
}

export default RegisterForm