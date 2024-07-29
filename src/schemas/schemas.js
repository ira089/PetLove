import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Name is required'),

  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid Email')
    .required('Email is required'),

  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),

  confirmpassword: yup
    .string()
    .required('Confirm password'),
});
