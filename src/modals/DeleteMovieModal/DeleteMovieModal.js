import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './DeleteMovieModal.scss';

export default function DeleteMovieModal(props) {
  const {
    onClose,
  } = props;

  return (
    <>
      <div className='modal-header'>
        <h3 className='modal-title'>Delete Movie</h3>
        <FontAwesomeIcon
          icon={faTimes}
          className='close__icon'
          onClick={onClose}
        />
      </div>
      <div className='modal-body'>
        <div className='message'>
          Are you sure you want to delete this movie?
        </div>
      </div>
      <div className='modal-footer'>
        <button type='button' className='submit__button'>
          Confirm
        </button>
      </div>
    </>
  );
}

DeleteMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
