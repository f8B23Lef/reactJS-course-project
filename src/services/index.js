import axios from 'axios';

const getMoviesService = async () => {
  const movies = await axios.get('/movies?limit=5');

  return movies.data.data;
};

export default getMoviesService;
