import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';
import { noticesThunk } from './operationsNotices';

const initialState = {
    notices:[],
    page:1,
    totalPages:0,
    isLoading: false,
    error: null,
  };

  const handleFulfilledFriends = (state, { payload }) => {
    state.notices = payload.results;
    state.page = payload.page;
    state.totalPages = payload.totalPages;
    handleFulfilled(state);
  };

  export const noticesSlice = createSlice({
    name: 'notices',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(noticesThunk.pending, handlePending)
        .addCase(noticesThunk.fulfilled, handleFulfilledFriends)
        .addCase(noticesThunk.rejected, handleRejected);
    },
  });
  
  export const noticesReducer = noticesSlice.reducer;