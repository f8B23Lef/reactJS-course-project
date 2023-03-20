import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './GenreToggle.scss';

export default function GenreToggle(props) {
  const {
    initialGenre,
    genreNames,
  } = props;
  const [selectedGenre, setGenre] = useState(initialGenre);

  const selectGenre = (genre) => {
    setGenre(genre);
  };

  const genres = genreNames.map((genre) => (
    <button
      type="button"
      key={genre}
      className={selectedGenre === genre ? 'active' : ''}
      onClick={() => selectGenre(genre)}
    >
      {genre}
    </button>
  ));

  return (
    <div className='genre-toggle'>
      {genres}
    </div>
  );
}

GenreToggle.propTypes = {
  initialGenre: PropTypes.string.isRequired,
  genreNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
