import React from 'react';
import { useSelector } from 'react-redux';
import { selectNotices, selectNoticesFavorites } from '../../redux/notices/selectornotices';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NoticesItem from '../Notices/NoticesItem';

const FavoritesList = () => {
  const isVariant = { variant: false };
  const { isLoading, error, notices } = useSelector(selectNotices);
  console.log(notices)
  // нужно сходить забрать notices
  const noticesFavorites = useSelector(selectNoticesFavorites)
  console.log(noticesFavorites)

  const elements = notices.map(item => (
    <Grid item xs={12} md={6} lg={6}>
      <NoticesItem key={item._id} item={item} isVariant={isVariant} />
    </Grid>
  ));
  
  return (
    <>
    {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          rowSpacing={{ xs: 2.5, sm: 2.5, lg: 3 }}
          columnSpacing={{ sm: 2.5, lg: 3 }}
        >
          {elements}
        </Grid>
      </Box>
    </>
  )
}

export default FavoritesList