import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/TopBar/TopBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import './Header.scss';

export default function Header(props) {
  const {
    showMovieDetails,
    setShowMovieDetails,
    movie,
  } = props;

  return (
    showMovieDetails
      ? (
        <MovieDetails
          movie={movie}
          setShowMovieDetails={setShowMovieDetails}
        />
      )
      : (
        <div className="header">
          <TopBar />
          <SearchBar />
        </div>
      )
  );
}

Header.propTypes = {
  showMovieDetails: PropTypes.bool.isRequired,
  setShowMovieDetails: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    url: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};
