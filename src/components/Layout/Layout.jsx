import React from 'react';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import HomePage from '../../Pages/HomePage/HomePage';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <HomePage />
      ) : (
        <div className={styles.container}>
          <Header
            background="#FFF4DF"
            fill="#F6B83D"
            color="#262626"
            borderColor="rgba(38, 38, 38, 0.15)"
            borderColorHover="#f6b83d"
          />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Layout;
