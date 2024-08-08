import React, {useState} from 'react';
import Button from 'components/Button/Button';
import styles from './myNotices.module.css';
import FavoritesList from 'components/FavoritesList/FavoritesList';
import ViewedList from 'components/ViewedList/ViewedList';

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState('tabFavorite')
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
     <div className={styles.wrapTab}>
    <button className={styles.tabF} onClick={() => handleTabClick('tabFavorite')}>My favorite pets</button>
    <button className={styles.tabV} onClick={() => handleTabClick('tabViewed')}>Viewed</button>
  </div>
  {activeTab === 'tabFavorite' && <FavoritesList/>}
  {activeTab === 'tabViewed' && <ViewedList/>}
    </>
   
  )
}

export default MyNotices