import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import styles from '../heder.module.css';

const UserNav = ({background, color}) => {
  
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
        <button style={{background: background, color:color}} className={styles.linkLogOut} type="button" onClick={openModal}>
          Log out
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} height={270} width={335}>
        <ModalApproveAction onClose={closeModal}/>
      </Modal>
    </>
  );
};

export default UserNav;
