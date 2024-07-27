import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';



const Layout = () => {
  return (
    <div className={styles.container}>
      
         <Header />
      
      <Suspense fallback={<Loader/>}>
        <main>
           <Outlet />
        </main>
      </Suspense>
    </div>

    
    
  )
}

export default Layout