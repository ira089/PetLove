import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../heder.module.css';

const Nav = ({ color, borderColor, borderColorHover }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const location = useLocation();
  const isActive = path => location.pathname === path;
  const handleMouseEnter = index => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <ul className={styles.navList}>
      <li
        className={styles.navItem}
        key="1"
        onMouseEnter={() => handleMouseEnter('1')}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          style={{
            color: color,
            borderColor:
              hoveredIndex === '1' || isActive('/news')
                ? borderColorHover
                : borderColor,
          }}
          className={styles.navLink}
          to="/news"
        >
          News
        </NavLink>
      </li>
      <li
        className={styles.navItem}
        key="2"
        onMouseEnter={() => handleMouseEnter('2')}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          style={{
            color: color,
            borderColor:
              hoveredIndex === '2' || isActive('/notices')
                ? borderColorHover
                : borderColor,
          }}
          className={styles.navLink}
          to="/notices"
        >
          Find pet
        </NavLink>
      </li>
      <li
        className={styles.navItem}
        key="3"
        onMouseEnter={() => handleMouseEnter('3')}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          style={{
            color: color,
            borderColor:
              hoveredIndex === '3' || isActive('/friends')
                ? borderColorHover
                : borderColor,
          }}
          className={styles.navLink}
          to="/friends"
        >
          Our friends
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
