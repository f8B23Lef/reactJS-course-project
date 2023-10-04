import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';
import Header from '../../views/Header/Header';
import MainContent from '../../views/MainContent/MainContent';
import Footer from '../../views/Footer/Footer';
import { fetchMovies } from '../../store/moviesSlice';
import { useURLSearchParams } from '../../hooks/index';
import { getMovieByIdRequest } from '../../api/index';

export default function Home() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [movie, setMovie] = useState();

  const sortBy = useURLSearchParams().get('sortBy') || 'vote_average';
  const genre = useURLSearchParams().get('genre') || '';
  const movieId = useURLSearchParams().get('movie') || '';
  const { searchQuery: search } = useParams();

  const onMovieClick = (movieId) => {
    searchParams.set('movie', movieId);
    setSearchParams(searchParams);

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    dispatch(fetchMovies({ sortBy, genre, search }));
  }, [dispatch, sortBy, genre, search]);

  useEffect(() => {
    const fetchMovieById = async (id) => {
      const response = await getMovieByIdRequest(id);

      if (response.status === 200) {
        setMovie(response.data);
        setShowMovieDetails(true);
      } else {
        // eslint-disable-next-line no-alert
        alert('Movie not found');
        setShowMovieDetails(false);
      }
    };

    if (movieId) {
      fetchMovieById(movieId);
    }
  }, [movieId]);

  return (
    <ErrorBoundary>
      <Header
        showMovieDetails={showMovieDetails}
        setShowMovieDetails={setShowMovieDetails}
        movie={movie}
      />
      <MainContent onMovieClick={onMovieClick} />
      <Footer />
    </ErrorBoundary>
  );
}
