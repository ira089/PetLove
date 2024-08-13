import React from 'react';
import { Field, ErrorMessage } from 'formik';
import InputField from './InputField'
import styles from './formaReactReg.module.css';


const Input = ({ name, placeholder,type}) => {
  
  return (
    <div className={styles.inputWrap}>
      <label>
        <Field name={name} placeholder={placeholder} type={type} component={InputField} />
        <ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
      </label>
    </div>
  );
};

export default Input;
