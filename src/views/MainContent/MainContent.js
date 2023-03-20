import React from 'react';
import GenreToggle from '../../components/GenreToggle/GenreToggle';
import SortDropdown from '../../components/SortDropdown/SortDropdown';
import MovieCount from '../../components/MovieCount/MovieCount';
import MovieList from '../../components/MovieList/MovieList';
import './MainContent.scss';

export default function MainContent() {
  return (
    <div className='main-content'>
      <div className='top-content'>
        <GenreToggle
          genreNames={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
          initialGenre='All'
        />
        <SortDropdown
          options={['Release date', 'Genre', 'Rating']}
        />
      </div>
      <MovieCount value={39} />
      <MovieList />
    </div>
  );
}
