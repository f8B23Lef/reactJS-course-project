import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GenreToggle from '../../components/GenreToggle/GenreToggle';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import MovieCount from '../../components/MovieCount/MovieCount';
import MovieList from '../../components/MovieList/MovieList';
import { GENRES, SORT_BY } from '../../utils/constants';
import { selectMoviesCount } from '../../store/moviesSlice';
import './MainContent.scss';

export default function MainContent(props) {
  const { onMovieClick } = props;

  const movieCount = useSelector(selectMoviesCount);

  return (
    <div className='main-content'>
      <div className='top-content'>
        <GenreToggle
          genreNames={['All', ...GENRES]}
          initialGenre='All'
        />
        <SortDropdown
          options={SORT_BY}
        />
      </div>
      <MovieCount value={movieCount} />
      <MovieList onMovieClick={onMovieClick} />
    </div>
  );
}

MainContent.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};
