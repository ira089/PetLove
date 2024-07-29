import React from 'react';
import styles from './formaReactReg.module.css';
import { Field, ErrorMessage  } from 'formik';

const Input = ({id, name, placeholder}) => {
  return (
    <div className={styles.inputWrap}>
        <label htmlFor={id}></label>
        <Field name={name} id={id} placeholder={placeholder}/>
        <ErrorMessage name={name}>{(error) => <span>{error}</span>}</ErrorMessage>
    </div>
  )
}

export default Input