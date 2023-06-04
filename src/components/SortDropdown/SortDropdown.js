import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../store/moviesSlice';
import { sortByChanged } from '../../store/filterSlice';
import './SortDropdown.scss';

export default function SortDropdown({ options }) {
  const dispatch = useDispatch();

  const selectedOption = useSelector((state) => state.filters.sortBy);

  const handleChange = (event) => {
    dispatch(sortByChanged(event.target.value));
    dispatch(fetchMovies());
  };

  return (
    <div className='sort'>
      <p>SORT BY</p>
      <select
        value={selectedOption}
        onChange={handleChange}
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
