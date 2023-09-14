import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getMoviesRequest,
  addMovieRequest,
  editMovieRequest,
  deleteMovieRequest,
} from '../api/index';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, thunkAPI) => {
    const movies = await getMoviesRequest(thunkAPI.getState().filters);
    return movies;
  },
);

export const addMovie = createAsyncThunk(
  'movies/addMovie',
  async (movie) => {
    const response = await addMovieRequest(movie);
    return response;
  },
);

export const editMovie = createAsyncThunk(
  'movies/editMovie',
  async (movie) => {
    const response = await editMovieRequest(movie);
    return response;
  },
);

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (id) => {
    await deleteMovieRequest(id);
    return { id };
  },
);

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
  shouldRefetchMovies: false,
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
        state.shouldRefetchMovies = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'failed';
        state.shouldRefetchMovies = false;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
        state.shouldRefetchMovies = true;
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'failed';
        state.shouldRefetchMovies = false;
      })
      .addCase(editMovie.fulfilled, (state, action) => {
        const index = state.movies
          .findIndex((movie) => movie.id === action.payload.id);
        state.movies[index] = action.payload;
        state.shouldRefetchMovies = true;
      })
      .addCase(editMovie.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'failed';
        state.shouldRefetchMovies = false;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        const movies = state.movies
          .filter((movie) => movie.id !== action.payload.id);
        state.movies = movies;
        state.shouldRefetchMovies = true;
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'failed';
        state.shouldRefetchMovies = false;
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
