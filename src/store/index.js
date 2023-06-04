import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import filtersReducer from './filterSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
  },
});
