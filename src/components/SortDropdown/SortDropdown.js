import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useURLSearchParams } from '../../hooks/index';
import './SortDropdown.scss';

export default function SortDropdown({ options }) {
  const sortByQuery = useURLSearchParams().get('sortBy') || 'vote_average';
  const [sortBy, setSortBy] = useState(sortByQuery);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSortBy(event.target.value);

    searchParams.set('sortBy', event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className='sort'>
      <p>SORT BY</p>
      <select
        value={sortBy}
        onChange={handleChange}
        data-testid='sort-select'
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

SortDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};
