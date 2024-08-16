import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchFriends = async () => {
  const { data } = await axios.get('/friends');
  return data;
};
