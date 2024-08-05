import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

// export const fetchNotices = async () => {
//     const { data } = await axios.get('/notices');
//   // console.log(data)
//     return data;
//   };

//  export const fetchNotices = async ({ page, query}) => {
//     console.log(query)
//     const { data } = await axios.get(`/notices?byDate=true&page=${page}&limit=6&keyword=${query}`);
//     // console.log(data);
//      return data;
//    };

export const fetchNotices = async ({
  page,
  query,
  category,
  type,
  location,
  byPrice,
  byPopularity,
}) => {
  // console.log(byPrice);
  // console.log(typeof (byPopularity))
  if (typeof (byPrice) === 'boolean') {
    const { data } = await axios.get(
      `/notices?byDate=true&page=${page}&limit=6&keyword=${query}&category=${category}&species=${type}&locationId=${location}&byPrice=${byPrice}`
    );
    console.log(data);
    return data;
  }
  if (typeof (byPopularity) === 'boolean') {
    const { data } = await axios.get(
      `/notices?byDate=true&page=${page}&limit=6&keyword=${query}&category=${category}&species=${type}&locationId=${location}&byPopularity=${byPopularity}`
    );
    console.log(data);
    return data;
  } else {
    const { data } = await axios.get(
      `/notices?byDate=true&page=${page}&limit=6&keyword=${query}&category=${category}&species=${type}&locationId=${location}`
    );
    console.log(data);
    return data;
  }
};
