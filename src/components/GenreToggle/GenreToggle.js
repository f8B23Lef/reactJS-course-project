import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useURLSearchParams } from '../../hooks/index';
import './GenreToggle.scss';

export default function GenreToggle({ genres }) {
  const genreQuery = useURLSearchParams().get('genre') || '';
  const [selectedGenre, setSelectedGenre] = useState(genreQuery);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectGenre = (genre) => {
    setSelectedGenre(genre);

    searchParams.set('genre', genre);
    setSearchParams(searchParams);
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
