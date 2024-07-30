import React from 'react';
import { Formik, Form } from 'formik';
import styles from './formaReactReg.module.css';
import * as schema from '../../schemas/schemas';
import Input from './Input';
import Button from 'components/Button/Button';

const LoginReactForma = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema.loginSchema}
      onSubmit={values => {
        console.log(values);
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
