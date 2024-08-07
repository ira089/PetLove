import React from 'react';
import AddPet from './AddPet';
import PetsList from './PetsList';
// import styles from './petsBlock.modulu.css';

const PetsBlock = () => {
  return (
    // <div className={styles.wrapEdit}>
    <>
    <AddPet/>
    <PetsList/>
    </>
  )
}

export default PetsBlock