import React, {useState} from 'react';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal/Modal';
import ModalEditUser from 'components/ModalEditUser/ModalEditUser';
import styles from './userCard.module.css';

const EditUserBtn = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className={styles.wrapEdit}>
        <div className={styles.user}>
            <span>User</span>
            <Icon name={'icon-user-white'} width={18} height={18} fill={'#fff'}/>
        </div>
        <button className={styles.pencil} type="button" onClick={openModal}>
        <Icon name={'icon-edit-2pen'} width={18} height={18} fill={'white'}/>
        </button>
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal} height={473} width={335}>
        <ModalEditUser onClose={closeModal}/>
      </Modal>
    </>
    
  )
}

export default EditUserBtn