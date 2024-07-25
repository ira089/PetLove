import React from 'react';
import { Button } from 'antd';
import styles from './layout.module.css';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Layout = () => {
  return (
    <div>
      <RegisterForm/>
       <Button className={styles.wrap} type="primary">lau</Button>
    </div>
    // classNames
  )
}

export default Layout