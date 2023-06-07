import React from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../../components/MovieForm/MovieForm';
import { editMovie } from '../../store/moviesSlice';

export default function EditMovieModal(props) {
  const {
    movie,
    onClose,
  } = props;

  return (
    <MovieForm
      title='Edit Movie'
      movie={movie}
      onSubmit={editMovie}
      onClose={onClose}
    />
  );
}

EditMovieModal.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
