import React from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../../components/MovieForm/MovieForm';

export default function EditMovieModal(props) {
  const {
    movie,
    onClose,
  } = props;

  return (
    <MovieForm title='Edit Movie' movie={movie} onClose={onClose} />
  );
}

EditMovieModal.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    url: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
