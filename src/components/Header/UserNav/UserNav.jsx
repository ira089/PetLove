import React, { useState } from 'react';
import styles from '../heder.module.css';
import Modal from 'components/Modal/Modal';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const UserNav = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.authNav}>
        <button className={styles.linkReg} type="button" onClick={openModal}>
          Log out
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} height={270}>
        <ModalApproveAction onClose={closeModal}/>
      </Modal>
    </>
  );
};

export default UserNav;
