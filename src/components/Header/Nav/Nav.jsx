import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../heder.module.css';


const Nav = ({color, borderColor, borderColorHover}) => {
   const [isHovered, setIsHovered] = useState(false);
   const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  return (
    
      <ul className={styles.navList}>
         <li  className={styles.navItem} style={{borderColor: borderColor}}>
            <NavLink style={{ color: color}} 
               // borderColor: borderColor}}
               // borderColor: isHovered ? borderColorHover : borderColor}}
                className={styles.navLink} to="/news"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            News</NavLink>
         </li>
         <li  className={styles.navItem}>
            <NavLink style={{ color: color,
             borderColor: isHovered ? borderColorHover : borderColor }}
              className={styles.navLink} to="/notices">Find pet</NavLink>
         </li>
         <li className={styles.navItem}>
            <NavLink style={{ color: color,
               borderColor: isHovered ? borderColorHover : borderColor}} 
                className={styles.navLink} to="/friends">Our friends</NavLink>
         </li>
      </ul>
    
  );
};

export default Nav