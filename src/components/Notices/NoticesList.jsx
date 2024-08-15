import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPage } from '../../redux/search/searchSlice';
import { selectNotices } from '../../redux/notices/selectornotices';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import PaginationMy from 'components/Pagination/PaginationMy';
import NoticesItem from './NoticesItem';

const NoticesList = () => {
  const { isLoading, error, notices, totalPages, page } =
    useSelector(selectNotices);

  const dispatch = useDispatch();

  const selectPage = num => {
    dispatch(addPage(num));
  };
  const isVariant = { variant: false };
  const elements = notices.map(item => (
    <Grid item mobile={12} tablet={6} desktop={4}>
      <NoticesItem key={item._id} item={item} isVariant={isVariant} />
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
            rowSpacing={{ mobile: 2.5, tablet: 2.5, desktop: 5 }}
            columnSpacing={{ tablet: 2.5, desktop: 4 }}
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

export default NoticesList;
