import React from 'react';
import styles from './petBlock.module.css';

const PetBlock = ({
  mobileImage1x,
  mobileImage2x,
  tabletImage1x,
  tabletImage2x,
  desktopImage1x,
  desktopImage2x,
}) => {
  return (
    <div className={styles.wrapImg}>
      <picture className={styles.img}>
        <source
         media="(max-width: 767px)"
          srcSet={`${mobileImage1x} 1x, ${mobileImage2x} 2x`}
        />
        <source
           media="(min-width: 768px) and (max-width: 1279px)"
          srcSet={`${tabletImage1x} 1x, ${tabletImage2x} 2x`}
        />
        <source
          media="(min-width: 1280px)"
          srcSet={`${desktopImage1x} 1x, ${desktopImage2x} 2x`}
        />
        <img src={desktopImage1x} alt="pet" />
      </picture>
    </div>
  );
};

export default PetBlock;
