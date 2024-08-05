import { createSlice } from '@reduxjs/toolkit';

const searchClice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    page: 1,
    category: '',
    gender: '',
    type: '',
    location: '',
    byPrice: '',
    byPopularity: '',
  },
  reducers: {
    addQuery: (state, { payload }) => {
      state.query = payload;
      state.page = 1;
    },
    addPage: (state, { payload }) => {
      state.page = payload;
    },
    addCategory: (state, { payload }) => {
      state.category = payload;
      state.page = 1;
    },
    addGender: (state, { payload }) => {
      state.gender = payload;
    },
    addType: (state, { payload }) => {
      state.type = payload;
    },
    addLocation: (state, { payload }) => {
      state.location = payload;
    },
    addByPrice: (state, { payload }) => {
      state.byPrice = payload;
    },
    addByPopularity: (state, { payload }) => {
      state.byPopularity = payload;
    },
  },
});

export const {
  addQuery,
  addPage,
  addCategory,
  addGender,
  addType,
  addLocation,
  addByPrice,
  addByPopularity,
} = searchClice.actions;
export default searchClice.reducer;
