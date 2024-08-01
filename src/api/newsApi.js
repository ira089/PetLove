import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = async ({search, page}) => {
    console.log(search)
    const { data } = await axios.get(`/news?keyword=${search}&page=${page}&limit=6`);
    // console.log(data);
    return data;
  };