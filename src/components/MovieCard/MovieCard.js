import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './MovieCard.scss';

export default function MovieCard(props) {
  const {
    title,
    description,
    year,
    poster,
  } = props;

  const handleIconClick = () => {
  };

  return (
    <div className='movie-card'>
      <img src={poster} alt='movie poster' />
      <FontAwesomeIcon
        icon={faEllipsisV}
        className='icon'
        onClick={handleIconClick}
      />
      <div className='movie-summary'>
        <div>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
        </div>
        <div className='year'>{year}</div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};
