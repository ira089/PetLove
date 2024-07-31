import Icon from 'components/Icon/Icon'
import React from 'react'
import CatIcon from '../../assets/img/catIcon.png'

const ModalApproveAction = () => {
  return (
    <div>
     <img src={CatIcon} alt='cat'/>
      <p>Already leaving?</p>
      <div>
        <button>Yes</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}

export default ModalApproveAction