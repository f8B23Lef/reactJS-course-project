import React from 'react';
import poster from '../../assets/images/inceptionPoster.png';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

export default function MovieList() {
  const movies = [{
    title: 'Inception',
    description: 'Action & Adventure',
    year: 2003,
    poster,
    key: 120,
  }];

  for (let i = 0; i < 5; i++) {
    movies.push({ ...movies[0], key: i });
  }

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <MovieCard
          key={movie.key}
          title={movie.title}
          description={movie.description}
          year={movie.year}
          poster={movie.poster}
        />
      ))}
    </div>
  );
}
