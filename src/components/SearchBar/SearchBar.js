import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { KEYS } from '../../utils/constants';
import './SearchBar.scss';

export default function SearchBar() {
  const navigate = useNavigate();
  const { searchQuery } = useParams();
  const [query, setQuery] = useState(searchQuery || '');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const { search } = useLocation();
  const searchMovie = () => {
    navigate({
      pathname: `/search/${query}`,
      search,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === KEYS.ENTER_KEY) {
      searchMovie();
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
      <button type='button' onClick={searchMovie}>Search</button>
    </div>
  );
}
