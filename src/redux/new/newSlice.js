import { createSlice } from '@reduxjs/toolkit';
import {newsThunk} from './opertionsNew';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from '../../helpers/functions';

const initialState = {
    news:[],
    isLoading: false,
    error: null,
    page:1,
    totalPages:0,
  };

  const handleFulfilledNew = (state, { payload }) => {
    state.news = payload.results;
    state.page = payload.page;
    state.totalPages = payload.totalPages;
    handleFulfilled(state);
  };

  export const newSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(newsThunk.pending, handlePending)
        .addCase(newsThunk.fulfilled, handleFulfilledNew)
        .addCase(newsThunk.rejected, handleRejected);
    },
  });
  
  export const newReducer = newSlice.reducer;