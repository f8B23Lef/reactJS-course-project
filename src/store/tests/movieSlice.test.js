import MoviesReducer,
{
  fetchMovies, addMovie, editMovie, deleteMovie,
} from '../moviesSlice';
import * as Api from '../../api/index';
import store from '../index';

describe('movieSlice', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      movies: [],
      status: 'idle',
      error: null,
      shouldRefetchMovies: false,
    };
  });

  describe('fetchMovies action', () => {
    it('sets status to "loading" on pending', () => {
      const action = { type: fetchMovies.pending.type };
      const state = MoviesReducer(initialState, action);

      expect(state.status).toBe('loading');
    });

    it('updates state on fulfilled', () => {
      const action = {
        type: fetchMovies.fulfilled.type,
        payload: [{ id: 1, title: 'movie1' }],
      };
      const state = MoviesReducer(initialState, action);

      expect(state).toEqual({
        movies: [{ id: 1, title: 'movie1' }],
        status: 'succeeded',
        error: null,
        shouldRefetchMovies: false,
      });
    });

    it('updates state on rejected', () => {
      const action = {
        type: fetchMovies.rejected.type,
        error: 'some error',
      };
      const state = MoviesReducer(initialState, action);

      expect(state).toEqual({
        movies: [],
        status: 'failed',
        error: 'some error',
        shouldRefetchMovies: false,
      });
    });
  });

  describe('addMovie action', () => {
    it('updates state on fulfilled', () => {
      const action = {
        type: addMovie.fulfilled.type,
        payload: { id: 1, title: 'movie1' },
      };
      const state = MoviesReducer(initialState, action);

      expect(state.movies).toEqual([{ id: 1, title: 'movie1' }]);
      expect(state.shouldRefetchMovies).toBe(true);
    });

    it('updates state on rejected', () => {
      const action = {
        type: addMovie.rejected.type,
        error: 'some error',
      };
      const state = MoviesReducer(initialState, action);

      expect(state).toEqual({
        movies: [],
        status: 'failed',
        error: 'some error',
        shouldRefetchMovies: false,
      });
    });
  });

  describe('editMovie action', () => {
    it('updates state on fulfilled', () => {
      initialState.movies = [{ id: 1, title: 'movie1' }];
      const action = {
        type: editMovie.fulfilled.type,
        payload: { id: 1, title: 'movie1 new' },
      };
      const state = MoviesReducer(initialState, action);

      expect(state.movies).toEqual([{ id: 1, title: 'movie1 new' }]);
      expect(state.shouldRefetchMovies).toBe(true);
    });

    it('updates state on rejected', () => {
      const action = {
        type: editMovie.rejected.type,
        error: 'some error',
      };
      const state = MoviesReducer(initialState, action);

      expect(state).toEqual({
        movies: [],
        status: 'failed',
        error: 'some error',
        shouldRefetchMovies: false,
      });
    });
  });

  describe('deleteMovie action', () => {
    it('updates state on fulfilled', () => {
      initialState.movies = [{ id: 1, title: 'movie1' }];
      const action = {
        type: deleteMovie.fulfilled.type,
        payload: { id: 1 },
      };
      const state = MoviesReducer(initialState, action);

      expect(state.movies).toEqual([]);
      expect(state.shouldRefetchMovies).toBe(true);
    });

    it('updates state on rejected', () => {
      const action = {
        type: deleteMovie.rejected.type,
        error: 'some error',
      };
      const state = MoviesReducer(initialState, action);

      expect(state).toEqual({
        movies: [],
        status: 'failed',
        error: 'some error',
        shouldRefetchMovies: false,
      });
    });
  });
});

describe('Movies thunks', () => {
  describe('fetchMovies', () => {
    const movies = [{
      id: 1,
      title: 'movie1',
    }];
    const filters = {
      genre: 'crime',
    };

    it('calls getMoviesRequest() with passed filters', async () => {
      jest.spyOn(Api, 'getMoviesRequest').mockResolvedValue(movies);
      await store.dispatch(fetchMovies(filters));

      expect(Api.getMoviesRequest).toHaveBeenCalledWith(filters);
    });

    it('calls getMoviesRequest() with empty object '
      + 'if there are no passed filters', async () => {
      jest.spyOn(Api, 'getMoviesRequest').mockResolvedValue(movies);
      await store.dispatch(fetchMovies());

      expect(Api.getMoviesRequest).toHaveBeenCalledWith({});
    });

    it('returns correct payload', async () => {
      jest.spyOn(Api, 'getMoviesRequest').mockResolvedValue(movies);
      const result = await store.dispatch(fetchMovies(filters));

      expect(result.payload).toEqual(movies);
    });
  });

  describe('addMovie', () => {
    const movie = {
      id: 1,
      title: 'movie1',
    };

    it('calls addMovieRequest() with passed movie', async () => {
      jest.spyOn(Api, 'addMovieRequest').mockResolvedValue(movie);
      await store.dispatch(addMovie(movie));

      expect(Api.addMovieRequest).toHaveBeenCalledWith(movie);
    });

    it('returns correct payload', async () => {
      jest.spyOn(Api, 'addMovieRequest').mockResolvedValue(movie);
      const result = await store.dispatch(addMovie(movie));

      expect(result.payload).toEqual(movie);
    });
  });

  describe('editMovie', () => {
    const movie = {
      id: 1,
      title: 'movie1',
    };

    it('calls editMovieRequest() with passed movie', async () => {
      jest.spyOn(Api, 'editMovieRequest').mockResolvedValue(movie);
      await store.dispatch(editMovie(movie));

      expect(Api.editMovieRequest).toHaveBeenCalledWith(movie);
    });

    it('returns correct payload', async () => {
      jest.spyOn(Api, 'editMovieRequest').mockResolvedValue(movie);
      const result = await store.dispatch(editMovie(movie));

      expect(result.payload).toEqual(movie);
    });
  });

  describe('deleteMovie', () => {
    const movieId = 1;

    it('calls deleteMovieRequest() with passed movie id', async () => {
      jest.spyOn(Api, 'deleteMovieRequest').mockResolvedValue(movieId);
      await store.dispatch(deleteMovie(movieId));

      expect(Api.deleteMovieRequest).toHaveBeenCalledWith(movieId);
    });

    it('returns correct payload', async () => {
      jest.spyOn(Api, 'deleteMovieRequest').mockResolvedValue(movieId);
      const result = await store.dispatch(deleteMovie(movieId));

      expect(result.payload).toEqual({ id: movieId });
    });
  });
});
