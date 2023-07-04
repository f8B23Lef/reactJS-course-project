import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';
import Header from '../../views/Header/Header';
import MainContent from '../../views/MainContent/MainContent';
import Footer from '../../views/Footer/Footer';
import { selectMovieById, fetchMovies } from '../../store/moviesSlice';
import { useURLSearchParams } from '../../hooks/index';

export default function Home() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [movieId, setMovieId] = useState();

  const movie = useSelector((state) => selectMovieById(state, movieId));

  const onMovieClick = (movieId) => {
    searchParams.set('movie', movieId);
    setSearchParams(searchParams);

    setShowMovieDetails(true);
    setMovieId(movieId);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const sortBy = useURLSearchParams().get('sortBy') || 'vote_average';
  const genre = useURLSearchParams().get('genre') || '';
  const { searchQuery: search } = useParams();

  useEffect(() => {
    dispatch(fetchMovies({ sortBy, genre, search }));
  }, [dispatch, sortBy, genre, search]);

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
