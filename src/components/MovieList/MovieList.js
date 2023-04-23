import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import { Modal, EditMovieModal, DeleteMovieModal } from '../../modals/index';
import { movie as initMovie } from '../../utils/constants';
import './MovieList.scss';

export default function MovieList(props) {
  const { onMovieClick } = props;

  const movies = [];

  for (let i = 0; i < 5; i++) {
    movies.push({ ...initMovie, id: i });
  }

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

  return (
    <>
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
