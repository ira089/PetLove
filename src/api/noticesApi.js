import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNotices = async ({
  page,
  query,
  category,
  type,
  location,
  byPrice,
  byPopularity,
}) => {
  if (typeof byPrice === 'boolean') {
    const { data } = await axios.get(
      `/notices?byDate=true&page=${page}&limit=6&keyword=${query}&category=${category}&species=${type}&locationId=${location}&byPrice=${byPrice}`
    );

    return data;
  }
  if (typeof byPopularity === 'boolean') {
    const { data } = await axios.get(
      `/notices?byDate=true&page=${page}&limit=6&keyword=${query}&category=${category}&species=${type}&locationId=${location}&byPopularity=${byPopularity}`
    );

    return data;
  } else {
    const { data } = await axios.get(
      `/notices?byDate=true&page=${page}&limit=6&keyword=${query}&category=${category}&species=${type}&locationId=${location}`
    );

    return data;
  }
};

export const fetchNoticesId = async id => {
  const { data } = await axios.get(`/notices/${id}`);

  return data;
};

export const fetchAddNoticesFavorites = async id => {
  const { data } = await axios.post(`/notices/favorites/add/${id}`);
  return data;
};

export const fetchDelNoticesFavorites = async id => {
  const { data } = await axios.delete(`/notices/favorites/remove/${id}`);

  return data;
};
