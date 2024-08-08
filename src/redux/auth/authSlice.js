import { createSlice } from '@reduxjs/toolkit';
import {
    registerThunk,
    loginThunk,
    logOutThunk,
    refresThunk,
    addFavoritesThunk,
    delFavoritesThunk
  } from './operationsAuth';
import {
    handleFulfilled,
    handlePending,
    handleRejected,
  } from '../../helpers/functions';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
    noticesFavorites: [],
    pets: [],
    noticesViewed: [],
  };
  
  const handleFulfilledRegister = (state, { payload }) => {
    state.user.name = payload.name;
    state.user.email = payload.email;
    state.token = payload.token;
    state.isLoggedIn = true;
    handleFulfilled(state);
  };
  
  const handleFulfilledLogOut = state => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    handleFulfilled(state);
  };
  
  const handleFulfilledRefrech = (state, { payload }) => {
    state.user.name = payload.name;
    state.user.email = payload.email;
    state.noticesFavorites = payload.noticesFavorites.map(el => el._id);
    state.isLoggedIn = true;
    state.isRefreshing = false;
    handleFulfilled(state);
  };

  const handleFulfilledFavorites = (state, { payload }) => {
    state.noticesFavorites = payload
    state.isLoggedIn = true;
    handleFulfilled(state);
  };

  const handleFulfilledFavoritesDel = (state, { payload }) => {
    state.noticesFavorites = payload
    state.isLoggedIn = true;
    handleFulfilled(state);
  };
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(registerThunk.pending, handlePending)
        .addCase(registerThunk.fulfilled, handleFulfilledRegister)
        .addCase(registerThunk.rejected, handleRejected)
        .addCase(loginThunk.pending, handlePending)
        .addCase(loginThunk.fulfilled, handleFulfilledRegister)
        .addCase(loginThunk.rejected, handleRejected)
        .addCase(logOutThunk.pending, handlePending)
        .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
        .addCase(logOutThunk.rejected, handleRejected)
        .addCase(refresThunk.pending, state => {
          state.isRefreshing = true;
          state.isLoading = true;
          state.error = null;
        })
        .addCase(refresThunk.fulfilled, handleFulfilledRefrech)
        .addCase(refresThunk.rejected, state => {
          state.isRefreshing = false;
          state.isLoading = false;
        })
        .addCase(addFavoritesThunk.pending, handlePending)
        .addCase(addFavoritesThunk.fulfilled, handleFulfilledFavorites)
        .addCase(addFavoritesThunk.rejected, handleRejected)
        .addCase(delFavoritesThunk.pending, handlePending)
        .addCase(delFavoritesThunk.fulfilled, handleFulfilledFavoritesDel)
        .addCase(delFavoritesThunk.rejected, handleRejected);
    },
  });
  export const authReducer = authSlice.reducer;