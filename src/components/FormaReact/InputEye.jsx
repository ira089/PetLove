import React, { useState } from 'react';
import styles from './formaReactReg.module.css';
import { Field, ErrorMessage } from 'formik';
import Icon from 'components/Icon/Icon';
import InputField from './InputField'

const Input = ({ name, placeholder }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.inputWrap}>
      <label>
        <Field
          name={name} 
          component={InputField}
          placeholder={placeholder}
          type={visible ? 'text' : 'password'}
        />
        <ErrorMessage name={name}>{error => <span>{error}</span>}</ErrorMessage>
        <button
          type="button"
          className={styles.btnEye}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <Icon width={18} height={18} name={'icon-eye-off'} />
        </button>
      </label>
    </div>
  );
};

export default Input;
