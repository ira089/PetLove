import React from 'react';
import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import styles from './formaReactReg.module.css';
import * as schema from '../../schemas/schemas';
import Input from './Input';
import Button from 'components/Button/Button';
import { loginThunk } from '../../redux/auth/operationsAuth';

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
        // <Navigate to="/profile" />;
      }}
    >
      <Form className={styles.form}>
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Password" type="password" />

        <Button className={styles.btn}>Log In</Button>
      </Form>
    </Formik>
  );
};

export default LoginReactForma;
