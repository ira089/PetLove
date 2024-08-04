import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPage } from '../../redux/search/searchSlice';
// import {selectNews} from '../../redux/new/selectorNew'
import * as selectorNew from '../../redux/new/selectorNew';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import NewsItem from './NewsItem';
import PaginationMy from 'components/Pagination/PaginationMy';

const NewsList = () => {
  const { isLoading, error, news, totalPages, page } = useSelector(
    selectorNew.selectNews
  );
  const dispatch = useDispatch();
  
  const selectPage = num => {
    dispatch(addPage(num));
  };

  const elements = news.map(item => (
    <Grid item xs={12} md={6} lg={4}>
      <NewsItem key={item._id} item={item} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          rowSpacing={{ xs: 3, sm: 4, lg: 5 }}
          columnSpacing={{ sm: 3, lg: 4 }}
        >
          {elements}
        </Grid>
      </Box>

      {!!totalPages && totalPages !== 1 && (
        <PaginationMy
          page={page}
          totalPages={totalPages}
          selectPage={selectPage}
        />
      )}
    </>
  );
};

export default NewsList;
