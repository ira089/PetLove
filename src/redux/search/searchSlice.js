import { createSlice } from '@reduxjs/toolkit';

const searchClice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    page: 1,
  },
  reducers: {
    addQuery: (state, { payload }) => {
      state.query = payload;
      state.page = 1;
    },
    addPage: (state, { payload }) => {
        state.page = payload;
      },
  },
});

export const { addQuery, addPage } = searchClice.actions;
export default searchClice.reducer;