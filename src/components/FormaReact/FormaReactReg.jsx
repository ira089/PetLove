import React from 'react';
import { Formik, Form } from 'formik';
import styles from './formaReactReg.module.css';
import * as schema from '../../schemas/schemas'
import Input from './Input';

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
                <Input name="firstName" id="firstName" placeholder="Name"/>

            </Form>
        </Formik>
    )
  
}

export default FormaReactReg