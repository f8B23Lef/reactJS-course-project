import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../store/moviesSlice';
import './GenreToggle.scss';

export default function GenreToggle(props) {
  const {
    initialGenre,
    genreNames,
  } = props;
  const [selectedGenre, setGenre] = useState(initialGenre);
  const dispatch = useDispatch();

  const selectGenre = (genre) => {
    setGenre(genre);

    const filter = genre === 'All' ? '' : genre;
    dispatch(fetchMovies({ filter }));
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
