import React from 'react';
import styles from './formaReactReg.module.css';
import { Field, ErrorMessage } from 'formik';
import InputField from './InputField'


const Input = ({ name, placeholder}) => {
  
  return (
    <div className={styles.inputWrap}>
      <label>
        <Field name={name} placeholder={placeholder} component={InputField} />
        <ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
      </label>
    </div>
  );
};

export default Input;
