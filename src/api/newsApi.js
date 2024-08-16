import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = async ({query, page}) => {
   
    const { data } = await axios.get(`/news?keyword=${query}&page=${page}&limit=6`);
    
    return data;
  };