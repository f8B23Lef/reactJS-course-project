import axios from 'axios';

const getMoviesService = async (sortBy = 'release_date') => {
  const movies = await axios.get(
    `/movies?limit=5&sortBy=${sortBy}&sortOrder=desc`,
  );

  return movies.data.data;
};

export default getMoviesService;
