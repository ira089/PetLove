import React from 'react';
import Icon from 'components/Icon/Icon';
import styles from './formaReactReg.module.css';

const InputField = ({ field, form, ...props }) => {
  const error = form.errors[field.name] && form.touched[field.name];
  const success = !form.errors[field.name] && form.touched[field.name];

  return (
    <div className={styles.inputWrap}>
      <label>
        <input
          {...field}
          {...props}
          style={{
            borderColor: error
              ? '#ef2447'
              : success
              ? '#08aa83'
              : 'rgba(38, 38, 38, 0.15)',
          }}
        />
        <button className={styles.btnEye}>
          {error && <Icon width={18} height={18} name={'icon-cross-small'} />}
          {success && <Icon width={18} height={18} name={'icon-green'} />}
        </button>
      </label>
    </div>
  );
};

export default InputField;
