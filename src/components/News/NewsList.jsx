import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPage } from '../../redux/search/searchSlice';
import * as selectorNew from '../../redux/new/selectorNew';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
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
    <Grid item mobile={12} tablet={6} desktop={4}>
      <NewsItem key={item._id} item={item} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={{ mobile: 3, tablet: 4, desktop: 5 }}
            columnSpacing={{ tablet: 3, desktop: 4 }}
          >
            {elements}
          </Grid>
        </Box>
      </ThemeProvider>

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
