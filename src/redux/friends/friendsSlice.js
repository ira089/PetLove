import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';
import { friendsThunk } from './operationsFriends';

const initialState = {
    friends:[],
    isLoading: false,
    error: null,
  };

  const handleFulfilledFriends = (state, { payload }) => {
    state.friends = payload;
    handleFulfilled(state);
  };

  export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(friendsThunk.pending, handlePending)
        .addCase(friendsThunk.fulfilled, handleFulfilledFriends)
        .addCase(friendsThunk.rejected, handleRejected);
    },
  });
  
  export const friendsReducer = friendsSlice.reducer;