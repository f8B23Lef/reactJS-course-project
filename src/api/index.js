import axios from 'axios';

export const getMoviesRequest = async ({
  sortBy = 'release_date',
  genre = '',
}) => {
  const movies = await axios.get(
    `/movies?limit=5&sortBy=${sortBy}&sortOrder=desc&filter=${genre}`,
  );

  return movies.data.data;
};

export const addMovieRequest = async (movie) => {
  const response = await axios.post('/movies', movie);

  return response.data;
};

export const editMovieRequest = async (movie) => {
  const response = await axios.put('/movies', movie);

  return response.data;
};

export const deleteMovieRequest = async (id) => {
  const response = await axios.delete(`/movies/${id}`);

  return response;
};
