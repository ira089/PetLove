import React from 'react';
import { useSelector } from 'react-redux';
import * as select from '../../redux/auth/selectorsAuth';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import NoticesItem from '../Notices/NoticesItem';
import styles from '../Notices/noticesItem.module.css';

const FavoritesList = () => {
  const isVariant = { variant: true };
  const isLoading = useSelector(select.selectIsLoadin);
  const error = useSelector(select.selectError);
  const favoritesPets = useSelector(select.selectFaforites);
  // const qwe = useSelector(select.selectPets);

  const isFavoritesPets = Boolean(favoritesPets.length);

  const elements = favoritesPets.map(item => (
    <Grid item mobile={12} tablet={6} desktop={6}>
      <NoticesItem key={item._id} item={item} isVariant={isVariant} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isFavoritesPets ? (
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
      ) : (
        <p className={styles.textOops}>
          Oops, <span>looks like there aren't any furries</span> on our adorable
          page yet. Do not worry! View your pets on the "find your favorite pet"
          page and add them to your favorites.
        </p>
      )}
    </>
  );
};

export default FavoritesList;
