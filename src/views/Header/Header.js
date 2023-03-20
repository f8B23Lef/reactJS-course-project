import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <TopBar />
      <SearchBar />
    </div>
  );
}
