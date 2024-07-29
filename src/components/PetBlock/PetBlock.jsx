import React from 'react';
import styles from './petBlock.module.css';

const PetBlock = ({mobileImage1x, mobileImage2x, tabletImage1x,
     tabletImage2x, desktopImage1x, desktopImage2x}) => {
  return (
    <div className={styles.wrapImg}>
        <picture className={styles.img}>
        <source
          media="(min-width: 320px)"
          srcSet={`${mobileImage1x} 1x, ${mobileImage2x} 2x`}
        />

        <source
          media="(min-width: 768px)"
          srcSet={`${tabletImage1x} 1x, ${tabletImage2x} 2x`}
        />

        <source
          media="(min-width: 1280px)"
          srcSet={`${desktopImage1x} 1x, ${desktopImage2x} 2x`}
        />

<img className={styles.img} src={desktopImage1x} srcSet={`${desktopImage1x} 1x, ${desktopImage2x} 2x`} alt="pet" />
      </picture>

    </div>
  )
}

export default PetBlock