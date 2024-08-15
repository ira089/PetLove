import React from 'react';
import { useSelector } from 'react-redux';
import * as select from '../../redux/auth/selectorsAuth';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import NoticesItem from '../Notices/NoticesItem';

const ViewedList = () => {
  const isVariant = { variant: false };
  const isLoading = useSelector(select.selectIsLoadin);
  const error = useSelector(select.selectError);
  const viewedPets = useSelector(select.selectViewed);

  const isViewedPets = Boolean(viewedPets.length);

  const elements = viewedPets.map(item => (
    <Grid item mobile={12} tablet={6} desktop={6}>
      <NoticesItem key={item._id} item={item} isVariant={isVariant} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isViewedPets && (
        <ThemeProvider theme={theme}>
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              rowSpacing={{ mobile: 2.5, tablet: 2.5, desktop: 3 }}
              columnSpacing={{ tablet: 2.5, desktop: 3 }}
            >
              {elements}
            </Grid>
          </Box>
        </ThemeProvider>
      )}
    </>
  );
};

export default ViewedList;
