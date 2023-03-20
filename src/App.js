import React from 'react';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';
import Header from './views/Header/Header';
import MainContent from './views/MainContent/MainContent';
import Footer from './views/Footer/Footer';

export default function App() {
  return (
    <ErrorBoundary>
      <Header />
      <MainContent />
      <Footer />
    </ErrorBoundary>
  );
}
