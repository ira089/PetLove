import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../api/authApi';
import {fetchAddNoticesFavorites, fetchDelNoticesFavorites} from '../../api/noticesApi'
import { toast } from 'react-toastify';

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (data, thunkAPI) => {
      try {
        const register = await authApi.fetchRegister(data);
        toast.success('Congratulations! You have successfully registered!');
        return register;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const loginThunk = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
      try {
        const login = await authApi.fetchLogin(data);
        return login;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const logOutThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      try {
        const logOut = await authApi.fetchLogOut();
        return logOut;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const refresThunk = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
          return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        const refresh = await authApi.fetchRefresh(persistedToken);
        return refresh;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addFavoritesThunk = createAsyncThunk(
    'auth/addfavorites',
    async (id, thunkAPI) => {
      try {
        const favorites = await fetchAddNoticesFavorites(id);
        return favorites;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const delFavoritesThunk = createAsyncThunk(
    'auth/delfavorites',
    async (id, thunkAPI) => {
      try {
        const favorites = await fetchDelNoticesFavorites(id);
        return favorites;
      } catch (error) {
        toast.error(`${error.message}`);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const currentFullThunk = createAsyncThunk(
    'auth/full',
    async (_, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
          return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        const currentFull = await authApi.fetchCurrentFull(persistedToken);
        return currentFull;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
   );

   export const petAddThunk = createAsyncThunk(
    'auth/addpet',
    async (_, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
          return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        const addPet = await authApi.fetchAddPet(persistedToken);
        console.log(addPet)
        return addPet;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
   );