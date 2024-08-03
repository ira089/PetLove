import React from 'react';
import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectornotices';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PaginationMy from 'components/Pagination/PaginationMy';
import NoticesItem from './NoticesItem';

const NoticesList = () => {
  const { isLoading, error, notices, totalPages } = useSelector(selectNotices);;
console.log(totalPages)
  const elements = notices.map(item => (
    <Grid item xs={12} md={6} lg={4}>
      <NoticesItem key={item._id} item={item} />
    </Grid>
  ));
  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          rowSpacing={{ xs: 2.5, sm: 2.5, lg: 5 }}
          columnSpacing={{ sm: 2.5, lg: 4 }}
        >
          {elements}
        </Grid>
      </Box>

      {!!totalPages && totalPages !== 1 && <PaginationMy />}
    </>
  );
};

export default NoticesList;
