import React from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../../components/MovieForm/MovieForm';

export default function AddMovieModal(props) {
  const {
    onClose,
  } = props;

  return (
    <MovieForm title='Add Movie' onClose={onClose} />
  );
}

AddMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
