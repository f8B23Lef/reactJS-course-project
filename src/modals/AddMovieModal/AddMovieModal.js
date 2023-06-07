import React from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../../components/MovieForm/MovieForm';
import { addMovie } from '../../store/moviesSlice';

export default function AddMovieModal(props) {
  const {
    onClose,
  } = props;

  return (
    <MovieForm
      title='Add Movie'
      onSubmit={addMovie}
      onClose={onClose}
    />
  );
}

AddMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
