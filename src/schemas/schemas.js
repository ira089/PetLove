import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required'),

  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid Email'
    )
    .required('Email is required'),

  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),

  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid Email'
    )
    .required('Email is required'),

  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

export const addPetSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required'),

  name: yup
    .string()
    .required('Name is required'),

    imgUrl: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Enter a valid imgUrl'
    )
    .required('imgUrl is required'),

    species: yup
    .object()
    .required('Species is required'),

    birthday: yup
    .string()
    .matches( /^\d{4}-\d{2}-\d{2}$/,'Enter a valid Birthday')
    .required('Birthday is required'),

    sex: yup
    .string()
    .required('Pet gender is required'),
});

export const editUserSchema = yup.object().shape({
  name: yup.string(),

  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid Email'),

    imgUrl: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Enter a valid imgUrl'),

   phone: yup
    .string()
    .matches(
      /^\+38\d{10}$/,
      'Enter a valid Phone')
});

