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

  export const fetchCities = async () => {
    const { data } = await axios.get('/cities');
  console.log(data)
    return data;
  };
  // export const fetchCities = async () => {
  //   try {
  //     const {data} = await axios.get('/cities');
  //     const transformedOptions = data.map(item => ({
  //       value: item._id,
  //       label: `${item.stateEn}, ${item.countyEn}`
  //     }));
  //     console.log(transformedOptions)
  //     return transformedOptions;
  //   } catch (error) {
  //     return error.message;
  //   }
  // };


