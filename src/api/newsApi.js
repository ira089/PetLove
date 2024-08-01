import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = async ({searh, page}) => {
    console.log(page)
    const { data } = await axios.get(`/news?keyword=${searh}&page=${page}&limit=6`);
    console.log(data);
    return data;
  };