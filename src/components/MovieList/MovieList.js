import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import Spinner from '../Spinner/Spinner';
import { Modal, EditMovieModal, DeleteMovieModal } from '../../modals/index';
import { selectMovies } from '../../store/moviesSlice';
import './MovieList.scss';

export default function MovieList(props) {
  const { onMovieClick } = props;

  const movies = useSelector(selectMovies);
  const moviesStatus = useSelector((state) => state.movies.status);
  const errorMessage = useSelector((state) => state.movies.error?.message);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [movie, setMovie] = useState({});

  const onEdit = (movieId) => {
    const movie = movies.find((movie) => movie.id === movieId);
    if (movie) {
      setMovie(movie);
      setShowEditModal(true);
    }
  };

  const onDelete = (movieId) => {
    const movie = movies.find((movie) => movie.id === movieId);
    if (movie) {
      setMovie(movie);
      setShowDeleteModal(true);
    }
  };

  let content;

  if (moviesStatus === 'loading') {
    content = <Spinner />;
  } else if (moviesStatus === 'succeeded') {
    content = (
      <div className='movie-list'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={onDelete}
            onEdit={onEdit}
            onClick={onMovieClick}
          />
        ))}
      </div>
    );
  } else if (moviesStatus === 'failed') {
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  }

  return (
    <>
      {content}
      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <EditMovieModal
            movie={movie}
            onClose={() => setShowEditModal(false)}
          />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal onClose={() => setShowDeleteModal(false)}>
          <DeleteMovieModal onClose={() => setShowDeleteModal(false)} />
        </Modal>
      )}
    </>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};
