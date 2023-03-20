import React, { useState } from 'react';
import './SearchBar.scss';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const searchQuery = () => {
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='What do you want to watch?'
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type='button' onClick={searchQuery}>Search</button>
    </div>
  );
}
