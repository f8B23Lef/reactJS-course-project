/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import MultiselectDropdown from '../MultiselectDropdown/MultiselectDropdown';
import './MovieForm.scss';

export default function MovieForm(props) {
  const {
    title,
    onClose,
    movie: initMovie,
  } = props;

  const [movie, setMovie] = useState(initMovie);

  const onChange = (e) => {
    setMovie({
      ...movie,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <div className='modal-header'>
        <h3 className='modal-title'>{title}</h3>
        <FontAwesomeIcon
          icon={faTimes}
          className='close__icon'
          onClick={onClose}
        />
      </div>
      <div className='modal-body'>
        <div className='flex-row'>
          <div className='flex-item'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              placeholder='Title'
              id='title'
              value={movie.title}
              onChange={onChange}
            />
          </div>
          <div className='flex-item'>
            <label htmlFor='release_date'>Release Date</label>
            <input
              type='date'
              placeholder='Select Date'
              id='release_date'
              value={movie.release_date}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='flex-row'>
          <div className='flex-item'>
            <label htmlFor='url'>Movie URL</label>
            <input
              type='url'
              placeholder='https://'
              id='url'
              value={movie.url}
              onChange={onChange}
            />
          </div>
          <div className='flex-item'>
            <label htmlFor='vote_average'>Rating</label>
            <input
              type='number'
              step='0.1'
              min='0'
              max='10'
              id='vote_average'
              placeholder='7,8'
              value={movie.vote_average}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='flex-row'>
          <div className='flex-item'>
            <label>Genre</label>
            <MultiselectDropdown selectedOptions={movie.genres} />
          </div>
          <div className='flex-item'>
            <label htmlFor='runtime'>Runtime</label>
            <input
              type='number'
              min='0'
              id='runtime'
              placeholder='minutes'
              value={movie.runtime || 0}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='flex-row'>
          <div className='flex-item flex-item-2'>
            <label htmlFor='overview'>Overview</label>
            <textarea
              rows='5'
              id='overview'
              placeholder='Movie Description'
              value={movie.overview}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <button type='button' className='reset__button' onClick={onClose}>
          Reset
        </button>
        <button type='button' className='submit__button'>
          Submit
        </button>
      </div>
    </>
  );
}

MovieForm.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    url: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {
  movie: {
    title: '',
    release_date: '',
    url: '',
    vote_average: 0,
    genres: [],
    runtime: 0,
    overview: '',
  },
};
