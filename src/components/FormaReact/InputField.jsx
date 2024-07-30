import React, { useState } from 'react';
import Icon from 'components/Icon/Icon';
import styles from './formaReactReg.module.css';

const InputField = ({ field, form, ...props }) => {
  const error = form.errors[field.name] && form.touched[field.name];
  const success = !form.errors[field.name] && form.touched[field.name];
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.inputWrap}>
      <label>
        <input
          {...field}
          {...props}
          type={props.type === 'password' && (visible ? 'text' : 'password')}
          style={{
            borderColor: error
              ? '#ef2447'
              : success
              ? '#08aa83'
              : 'rgba(38, 38, 38, 0.15)',
          }}
        />
        <div
          className={styles.btnEyeWrap}
          style={{
            transform: props.type === 'password' && 'translate(-20%, 50%)',
          }}
        >
          <button className={styles.btnEye}>
            {error && <Icon width={18} height={18} name={'icon-cross-small'} />}
            {success && <Icon width={18} height={18} name={'icon-green'} />}
          </button>
          {props.type === 'password' && (
            <button
              type="button"
              className={styles.btnEye}
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <Icon width={20} height={20} name={'icon-eye-off'} />
            </button>
          )}
        </div>
        {success && props.placeholder === 'Password' && (
          <span style={{ color: '#08aa83' }}>Password is secure</span>
        )}
      </label>
    </div>
  );
}

export default InputField;
