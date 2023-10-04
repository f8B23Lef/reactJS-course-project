import axios from 'axios';

export const getMoviesRequest = async ({
  sortBy = '',
  genre = '',
  search = '',
  searchBy = 'title',
}) => {
  const movies = await axios.get(
    `/movies?limit=5&sortBy=${sortBy}&sortOrder=desc&filter=${genre}`
    + `&search=${search}&searchBy=${searchBy}`,
  );

  return movies.data.data;
};

export const getMovieByIdRequest = async (id) => {
  const response = await axios.get(`/movies/${id}`)
    .catch((error) => error.response);

  return response;
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
