import Icon from 'components/Icon/Icon';
import React from 'react';
import styles from '../heder.module.css';

const Logo = ({ color, fill }) => {
  return (
    <div>
      <p style={{ color: color }} className={styles.textLogo}>
        petl
        <Icon
          className={styles.iconLogo}
          // width={17}
          // height={17}
          name={'icon-hearFill'}
          fillColor={fill}
        />
        ve
      </p>
    </div>
  );
};

export default Logo;
