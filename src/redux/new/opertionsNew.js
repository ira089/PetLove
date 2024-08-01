import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchNews} from '../../api/newsApi'

export const newsThunk = createAsyncThunk(
    'news/get',
    async (body, thunkAPI) => {
      console.log(body)
      try {
        const news = fetchNews(body);
        return news;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );