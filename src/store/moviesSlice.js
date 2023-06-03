import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getMoviesService from '../services/index';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (data = {}) => {
    const movies = await getMoviesService(data);

    return movies;
  },
);

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'failed';
      });
  },
});

export default moviesSlice.reducer;
export const {
  setMovies,
} = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectMoviesCount = (state) => state.movies.movies?.length;
export const selectMovieById = (state, movieId) => (
  state.movies.movies.find((movie) => movie.id === movieId)
);
