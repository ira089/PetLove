import React from 'react';
import FriendsItem from './FriendsItem';
import { useSelector } from 'react-redux';
import {selectFriends} from '../../redux/friends/selectorFriends';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const FriendsList = () => {
    const { friends, isLoading, error } = useSelector(selectFriends);

    const elements = friends.map(item => (
        <Grid item xs={12} md={6} lg={4}>
                <FriendsItem key={item._id} item={item}/>
              </Grid>
        ))


  return (
    <>
    {isLoading && <p>...Loading</p>}
    {error && <p>{error.message}</p>}
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={{xs: 2.5, sm: 2.5, lg: 3.5 }} columnSpacing={{  sm: 2.5, lg: 2.5 }}>
        {elements}
        
      </Grid>
    </Box>
    </>
  )
}

export default FriendsList