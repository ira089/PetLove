import React from 'react';
import { Formik, Form } from 'formik';
import styles from './formaReactReg.module.css';
import * as schema from '../../schemas/schemas'
import Input from './Input';
import Button from 'components/Button/Button';

const FormaReactReg = () => {
    return(
        <Formik  initialValues={{
            firstName: '',
            email: '',
            password:'',
            confirmpassword: ''
          }}
          validationSchema={schema.registerSchema}
           onSubmit={values => {
             
             console.log(values);
           }}>
           
            <Form className={styles.form}>
                <Input name="firstName"  placeholder="Name" type='name'/>
                <Input name="email"  placeholder="Email" type='email'/>
                <Input name="password"  placeholder="Password" type='password'/>
                <Input name="confirmPassword"  placeholder="Confirm password" type='password'/>
                <Button className={styles.btn}>Registration</Button>

            </Form>
        </Formik>
    )
  
}

export default FormaReactReg