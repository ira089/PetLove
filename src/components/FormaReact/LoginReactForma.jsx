import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as schema from '../../schemas/schemas';
import Input from './Input';
import Button from 'components/Button/Button';
import { loginThunk } from '../../redux/auth/operationsAuth';
import styles from './formaReactReg.module.css';

const LoginReactForma = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema.loginSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(loginThunk(values));

        resetForm();
      }}
    >
      <Form className={styles.form}>
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Password" type="password" />
        <div className={styles.btnLog}>
          <Button style={{textTransform: 'uppercase'}}>Log In</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginReactForma;
