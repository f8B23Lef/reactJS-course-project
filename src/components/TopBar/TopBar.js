import React from 'react';
import Logo from '../Logo/Logo';
import './TopBar.scss';

export default function TopBar() {
  const addMovie = () => {
  };

  return (
    <div className='top-bar'>
      <Logo />
      <button type="button" onClick={addMovie}>+ ADD MOVIE</button>
    </div>
  );
}
