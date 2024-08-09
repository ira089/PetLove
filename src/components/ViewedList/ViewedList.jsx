import React from 'react';
import { useSelector } from 'react-redux';
import * as select from '../../redux/auth/selectorsAuth';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NoticesItem from '../Notices/NoticesItem';

const ViewedList = () => {
  const isVariant = { variant: false };
  const isLoading = useSelector(select.selectIsLoadin);
  const error = useSelector(select.selectError);
  const viewedPets = useSelector(select.selectViewed);

  const isViewedPets = Boolean(viewedPets.length);

  const elements = viewedPets.map(item => (
    <Grid item xs={12} md={6} lg={6}>
      <NoticesItem key={item._id} item={item} isVariant={isVariant} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isViewedPets && (
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={{ xs: 2.5, sm: 2.5, lg: 3 }}
            columnSpacing={{ sm: 2.5, lg: 3 }}
          >
            {elements}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ViewedList;
