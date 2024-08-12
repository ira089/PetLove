import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNotices } from '../../api/noticesApi';

// export const noticesThunk = createAsyncThunk(
//     'notices/get',
//     async (_, thunkAPI) => {
      
//       try {
//         const notices = fetchNotices();
//         return notices;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );

  export const noticesThunk = createAsyncThunk(
    'notices/get',
    async (body, thunkAPI) => {
      
      try {
        const notices = fetchNotices(body);
        return notices;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );