import React from 'react';
import FriendsItem from './FriendsItem';
import { useSelector } from 'react-redux';
import { selectFriends } from '../../redux/friends/selectorFriends';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import theme from '../../assets/theme';
import { ThemeProvider} from '@mui/material/styles';

const FriendsList = () => {
  const { friends, isLoading, error } = useSelector(selectFriends);

  const elements = friends.map(item => (
    <Grid item mobile={12} tablet={6} desktop={4}>
      <FriendsItem key={item._id} item={item} />
    </Grid>
  ));

  return (
    <>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      <ThemeProvider theme={theme} >
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          rowSpacing={{ mobile: 2.5, tablet: 2.5, desktop: 3.5 }}
          columnSpacing={{ tablet: 2.5, desktop: 2.5 }}
        >
          {elements}
        </Grid>
      </Box>
      </ThemeProvider>
      
    </>
  );
};

export default FriendsList;
