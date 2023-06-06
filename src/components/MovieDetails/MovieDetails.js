import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import { getYearFromDate, getHoursAndMinutes } from '../../utils/utils';
import './MovieDetails.scss';

export default function MovieDetails(props) {
  const {
    movie,
    setShowMovieDetails,
  } = props;

  return (
    <div className='movie-details'>
      <div className='movie-details__header'>
        <Logo />
        <span
          className='search__icon'
          onClick={() => setShowMovieDetails(false)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <div className='movie-details__content'>
        <img src={movie.poster_path} alt='movie poster' />
        <div className='info'>
          <div className='title'>
            {movie.title}
            <span className='rating'>{movie.vote_average}</span>
          </div>
          <div className='genre'>{movie.genres.join(', ')}</div>
          <div className='duration'>
            <span>{getYearFromDate(movie.release_date)}</span>
            <span className='runtime'>{getHoursAndMinutes(movie.runtime)}</span>
          </div>
          <div className='description'>{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
  }),
  setShowMovieDetails: PropTypes.func.isRequired,
};

MovieDetails.defaultProps = {
  movie: {
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: 0,
    genres: [],
    runtime: 0,
    overview: '',
  },
};
