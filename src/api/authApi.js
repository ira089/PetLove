import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const fetchRegister = async body => {
  const { data } = await axios.post('/users/signup', body);
  console.log(data);
  setAuthHeader(data.token);
  return data;
};

export const fetchLogin = async body => {
  const { data } = await axios.post('/users/signin', body);
  // console.log(data);
  setAuthHeader(data.token);
  return data;
};

export const fetchLogOut = async () => {
  const { data } = await axios.post('/users/signout');
  clearAuthHeader();
  return data;
};

export const fetchRefresh = async token => {
  setAuthHeader(token);
  try {
    const { data } = await axios.get('/users/current');
    // console.log(data);
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};

export const fetchCurrentFull = async token => {
  setAuthHeader(token);
  try {
    const { data } = await axios.get('/users/current/full');
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};

export const fetchAddPet = async (token, body) => {
  setAuthHeader(token);
  try {
    const { data } = await axios.post('/users/current/pets/add', body);
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};

export const fetchDellPet = async (token, id) => {
  setAuthHeader(token);
  try {
    const { data } = await axios.delete(`/users/current/pets/remove/${id}`);
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};
