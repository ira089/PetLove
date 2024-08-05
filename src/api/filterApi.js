import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchSex = async () => {
    const { data } = await axios.get('/notices/sex');
  // console.log(data)
    return data;
  };

  export const fetchCategories = async () => {
    const { data } = await axios.get('/notices/categories');
  // console.log(data)
    return data;
  };

  export const fetchSpecies = async () => {
    const { data } = await axios.get('/notices/species');
  // console.log(data)
    return data;
  };



