import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: 'release_date',
  genre: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    sortByChanged(state, action) {
      state.sortBy = action.payload;
    },
    genreChanged(state, action) {
      state.genre = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const {
  sortByChanged,
  genreChanged,
} = filtersSlice.actions;
