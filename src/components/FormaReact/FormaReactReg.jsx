import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operationsAuth';
import { Formik, Form } from 'formik';
import styles from './formaReactReg.module.css';
import * as schema from '../../schemas/schemas';
import Input from './Input';
import Button from 'components/Button/Button';

const FormaReactReg = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
      }}
      validationSchema={schema.registerSchema}
      onSubmit={(values, { resetForm }) => {
        const { confirmPassword, confirmpassword, ...dataThunk } = values;
        dispatch(registerThunk(dataThunk));

        resetForm();
      }}
    >
      <Form className={styles.form}>
        <Input name="name" placeholder="Name" type="name" />
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Password" type="password" />
        <Input
          name="confirmpassword"
          placeholder="Confirm password"
          type="password"
        />
        <div className={styles.btn}>
          <Button style={{ textTransform: 'uppercase' }}>Registration</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormaReactReg;
