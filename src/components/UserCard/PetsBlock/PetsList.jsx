import React from 'react';
import { useSelector } from 'react-redux';
import * as select from '../../../redux/auth/selectorsAuth';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../../assets/theme';
import { ThemeProvider } from '@mui/material/styles';
import Petsitem from './Petsitem';
import styles from './petsItem.module.css';

const PetsList = () => {
  const isLoading = useSelector(select.selectIsLoadin);
  const error = useSelector(select.selectError);
  const userPets = useSelector(select.selectPets);

  const isUserPets = Boolean(userPets.length);

  const elements = userPets.map(item => (
    <Grid item mobile={12} tablet={6} desktop={12}>
      <Petsitem key={item._id} item={item} />
    </Grid>
  ));
  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {isUserPets && (
        <div className={styles.wrapList}>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1.75} columnSpacing={1}>
                {elements}
              </Grid>
            </Box>
          </ThemeProvider>
        </div>
      )}
    </>
  );
};

export default PetsList;
