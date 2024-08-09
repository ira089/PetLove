import React from 'react';
import { useSelector } from 'react-redux';
import * as select from '../../redux/auth/selectorsAuth';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NoticesItem from '../Notices/NoticesItem';
import styles from '../Notices/noticesItem.module.css';

const FavoritesList = () => {
  const isVariant = { variant: false };
  const isLoading = useSelector(select.selectIsLoadin);
  const error = useSelector(select.selectError);
  const favoritesPets = useSelector(select.selectFaforites);
  const qwe = useSelector(select.selectPets);
  const sxc = useSelector(select.selectViewed);

  console.log(isLoading);
  console.log(error);
  console.log(favoritesPets);
  console.log(qwe);
  console.log(sxc);
  const isFavoritesPets = Boolean(favoritesPets.length);

  const elements = favoritesPets.map(item => (
    <Grid item xs={12} md={6} lg={6}>
      <NoticesItem key={item._id} item={item} isVariant={isVariant} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isFavoritesPets ? (
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={{ xs: 2.5, sm: 2.5, lg: 3 }}
            columnSpacing={{ sm: 2.5, lg: 3 }}
          >
            {elements}
          </Grid>
        </Box>
      ) : (
        <p className={styles.textOops}>
          Oops, <span>looks like there aren't any furries</span> on our adorable page yet. Do
          not worry! View your pets on the "find your favorite pet" page and add
          them to your favorites.
        </p>
      )}
    </>
  );
};

export default FavoritesList;
