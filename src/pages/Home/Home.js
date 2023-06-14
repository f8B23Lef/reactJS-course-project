import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';
import Header from '../../views/Header/Header';
import MainContent from '../../views/MainContent/MainContent';
import Footer from '../../views/Footer/Footer';
import { selectMovieById } from '../../store/moviesSlice';

export default function Home() {
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [movieId, setMovieId] = useState();

  const movie = useSelector((state) => selectMovieById(state, movieId));

  const onMovieClick = (movieId) => {
    setShowMovieDetails(true);
    setMovieId(movieId);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

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
