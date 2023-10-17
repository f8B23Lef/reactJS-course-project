import axios from 'axios';
import {
  getMoviesRequest,
  getMovieByIdRequest,
  addMovieRequest,
  editMovieRequest,
  deleteMovieRequest,
} from '../index';

describe('getMoviesRequest() function', () => {
  it('makes GET request with specific params', async () => {
    const filter = {
      sortBy: 'title',
      genre: 'crime',
    };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: [] });
    await getMoviesRequest(filter);

    expect(axios.get).toHaveBeenCalledWith('/movies?limit=5&sortBy=title'
      + '&sortOrder=desc&filter=crime&search=&searchBy=title');
  });
});

describe('getMovieByIdRequest() function', () => {
  it('makes GET request with specific params', async () => {
    const movieId = 1;
    jest.spyOn(axios, 'get').mockResolvedValue({});
    await getMovieByIdRequest(movieId);

    expect(axios.get).toHaveBeenCalledWith('/movies/1');
  });

  it('returns a specific movie based on movie id', async () => {
    const movie = { id: 1, title: 'Movie 1' };
    jest.spyOn(axios, 'get').mockResolvedValue(movie);
    const response = await getMovieByIdRequest(1);

    expect(response).toEqual(movie);
  });

  it('returns error if request rejected', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({ response: 'Some error' });
    const response = await getMovieByIdRequest(1);

    expect(response).toEqual('Some error');
  });
});

describe('addMovieRequest() function', () => {
  it('makes POST request with specific params', async () => {
    const movie = { id: 1, title: 'Movie 1' };
    jest.spyOn(axios, 'post').mockResolvedValue({});
    await addMovieRequest(movie);

    expect(axios.post).toHaveBeenCalledWith('/movies', movie);
  });
});

describe('editMovieRequest() function', () => {
  it('makes PUT request with specific params', async () => {
    const movie = { id: 1, title: 'Movie 1' };
    jest.spyOn(axios, 'put').mockResolvedValue({});
    await editMovieRequest(movie);

    expect(axios.put).toHaveBeenCalledWith('/movies', movie);
  });
});

describe('deleteMovieRequest() function', () => {
  it('makes PUT request with specific params', async () => {
    jest.spyOn(axios, 'delete').mockResolvedValue({});
    await deleteMovieRequest(1);

    expect(axios.delete).toHaveBeenCalledWith('/movies/1');
  });
});
