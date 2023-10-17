import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { deleteMovie } from '../../store/moviesSlice';
import './DeleteMovieModal.scss';

export default function DeleteMovieModal(props) {
  const {
    movieId,
    onClose,
  } = props;
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(deleteMovie(movieId));
    onClose();
  };

  return (
    <>
      <div className='modal-header'>
        <h3 className='modal-title'>Delete Movie</h3>
        <FontAwesomeIcon
          icon={faTimes}
          className='close__icon'
          data-testid='close-icon'
          onClick={onClose}
        />
      </div>
      <div className='modal-body'>
        <div className='message'>
          Are you sure you want to delete this movie?
        </div>
      </div>
      <div className='modal-footer'>
        <button
          type='button'
          className='submit__button'
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </>
  );
}

DeleteMovieModal.propTypes = {
  movieId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
