import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFriends } from 'api/friendsApi';

export const friendsThunk = createAsyncThunk(
    'friends/get',
    async (_, thunkAPI) => {
      
      try {
        const friends = fetchFriends();
        return friends;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );