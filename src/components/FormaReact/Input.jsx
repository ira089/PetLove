import React, {useState} from 'react';
import styles from './formaReactReg.module.css';
import { Field, ErrorMessage  } from 'formik';
import Icon from 'components/Icon/Icon';


const Input = ({id, name, placeholder}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.inputWrap}>
        <label htmlFor={id}>
        <Field name={name} id={id} placeholder={placeholder} type={visible ? 'text' : 'password'}/>
        <ErrorMessage name={name}>{(error) => <span>{error}</span>}</ErrorMessage>
        <button  type="button" className={styles.btnEye}
                  onClick={() => {
                    setVisible(!visible);
                  }}>
<Icon width={18} height={18} name={"icon-eye-off"}/>
        </button>
        
        

        </label>
       
       
        
    </div>
  )
}

export default Input