import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import Spinner from '../Spinner/Spinner';
import { Modal, EditMovieModal, DeleteMovieModal } from '../../modals/index';
import { selectMovies, fetchMovies } from '../../store/moviesSlice';
import { useURLSearchParams } from '../../hooks/index';
import './MovieList.scss';

export default function MovieList(props) {
  const { onMovieClick } = props;

  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const moviesStatus = useSelector((state) => state.movies.status);
  const errorMessage = useSelector((state) => state.movies.error?.message);
  const shouldRefetchMovies = useSelector(
    (state) => state.movies.shouldRefetchMovies,
  );

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [movie, setMovie] = useState({});

  const sortBy = useURLSearchParams().get('sortBy') || 'vote_average';
  const genre = useURLSearchParams().get('genre') || '';
  const { searchQuery: search } = useParams();

  useEffect(() => {
    if (shouldRefetchMovies) {
      dispatch(fetchMovies({ sortBy, genre, search }));
    }
  }, [dispatch, shouldRefetchMovies, sortBy, genre, search]);

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

  if (moviesStatus === 'failed') {
    // eslint-disable-next-line no-alert
    alert(errorMessage);
  }

  let content;
  if (moviesStatus === 'loading') {
    content = <Spinner />;
  } else if (moviesStatus === 'succeeded' || movies.length) {
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
          <DeleteMovieModal
            movieId={movie.id}
            onClose={() => setShowDeleteModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};
