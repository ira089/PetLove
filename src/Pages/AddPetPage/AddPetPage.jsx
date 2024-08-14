import React from 'react';
import PetBlock from 'components/PetBlock/PetBlock';
import AddPetForm from '../../components/AddPetForm/AddPetForm';
import dogWithGlasses1D from '../../assets/img/dogWithGlasses1D.png' ;
import dogWithGlasses1M from '../../assets/img/dogWithGlasses1M.png' ;
import dogWithGlasses1P from '../../assets/img/dogWithGlasses1P.png' ;
import dogWithGlasses2D from '../../assets/img/dogWithGlasses2D.png';
import dogWithGlasses2P from '../../assets/img/dogWithGlasses2P.png' ;
import dogWithGlasses2M from '../../assets/img/dogWithGlasses2M.png' ;
import styles from './addpetPage.module.css';

const AddPetPage = () => {
  return (
    <section className={styles.wrapAddPet}>
      <PetBlock mobileImage1x={dogWithGlasses1M}
       mobileImage2x={dogWithGlasses2M}
       tabletImage1x={dogWithGlasses1P}
      tabletImage2x={dogWithGlasses2P}
       desktopImage1x={dogWithGlasses1D}
        desktopImage2x={dogWithGlasses2D}/>
      <AddPetForm/>
    </section>
  )
}

export default AddPetPage