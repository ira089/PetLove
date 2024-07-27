import React from 'react';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import HomePage from 'Pages/HomePage/HomePage';



const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (<HomePage/> ):
      <div className={styles.container}>
           <Header background='#FFF4DF' fill='#F6B83D' color='#262626' />
           <Suspense fallback={<Loader/>}>
              <main>
                <Outlet />
              </main>
            </Suspense>
       </div>
      }
    </>
    

      
         
  

    
    
  )
}

export default Layout