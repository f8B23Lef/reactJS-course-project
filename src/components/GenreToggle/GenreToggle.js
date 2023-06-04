import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../store/moviesSlice';
import { genreChanged } from '../../store/filterSlice';
import './GenreToggle.scss';

export default function GenreToggle({ genres }) {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state.filters.genre);

  const selectGenre = (genre) => {
    dispatch(genreChanged(genre));
    dispatch(fetchMovies());
  };

  return (
    <div className='genre-toggle'>
      {genres.map(({ name, value }) => (
        <button
          type="button"
          key={value}
          className={selectedGenre === value ? 'active' : ''}
          onClick={() => selectGenre(value)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

GenreToggle.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};
