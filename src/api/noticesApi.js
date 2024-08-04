import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNotices = async () => {
    const { data } = await axios.get('/notices');
  // console.log(data)
    return data;
  };


 export const fetchNoticesSelect = async ({ page}) => {
    // console.log(query)
    const { data } = await axios.get(`/notices?byDate=true&page=${page}&limit=6`);
    // console.log(data);
     return data;
   };