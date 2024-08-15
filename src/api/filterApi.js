import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchSex = async () => {
  const { data } = await axios.get('/notices/sex');

  return data;
};

export const fetchCategories = async () => {
  const { data } = await axios.get('/notices/categories');

  return data;
};

export const fetchSpecies = async () => {
  const { data } = await axios.get('/notices/species');

  return data;
};

export const fetchCities = async () => {
  const { data } = await axios.get('/cities');

  return data;
};
