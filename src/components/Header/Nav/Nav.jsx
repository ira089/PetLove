import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../heder.module.css';

const Nav = ({ color, borderColor, borderColorHover }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        style={{
          borderColor: hoveredIndex === '1' ? borderColorHover : borderColor,
        }}
      >
        <NavLink style={{ color: color }} className={styles.navLink} to="/news">
          News
        </NavLink>
      </li>
      <li
        className={styles.navItem}
        key="2"
        onMouseEnter={() => handleMouseEnter('2')}
        onMouseLeave={handleMouseLeave}
        style={{
          borderColor: hoveredIndex === '2' ? borderColorHover : borderColor,
        }}
      >
        <NavLink
          style={{ color: color }}
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
        style={{
          borderColor: hoveredIndex === '3' ? borderColorHover : borderColor,
        }}
      >
        <NavLink
          style={{ color: color }}
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
