import React, { useState } from 'react';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';
import Header from './views/Header/Header';
import MainContent from './views/MainContent/MainContent';
import Footer from './views/Footer/Footer';

export default function App() {
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [movie, setMovie] = useState({});

  const onMovieClick = (movie) => {
    setShowMovieDetails(true);
    setMovie(movie);
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
