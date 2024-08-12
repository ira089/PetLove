import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = async ({query, page}) => {
    // console.log(query)
    const { data } = await axios.get(`/news?keyword=${query}&page=${page}&limit=6`);
    // console.log(data);
    return data;
  };