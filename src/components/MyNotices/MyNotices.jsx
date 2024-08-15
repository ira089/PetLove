import React, {useState} from 'react';
import FavoritesList from 'components/FavoritesList/FavoritesList';
import ViewedList from 'components/ViewedList/ViewedList';
import styles from './myNotices.module.css';

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState('tabFavorite')
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
     <div className={styles.wrapTab}>
    <button autoFocus className={`${styles.tab} ${activeTab === 'tabFavorite' ? styles.activeTab : ''}`} onClick={() => handleTabClick('tabFavorite')}>My favorite pets</button>
    <button className={styles.tab} onClick={() => handleTabClick('tabViewed')}>Viewed</button>
  </div>
  {activeTab === 'tabFavorite' && <FavoritesList/>}
  {activeTab === 'tabViewed' && <ViewedList/>}
    </div>
   
  )
}

export default MyNotices