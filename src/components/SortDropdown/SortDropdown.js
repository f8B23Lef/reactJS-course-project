import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../store/moviesSlice';
import './SortDropdown.scss';

export default function SortDropdown({ options }) {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(options[0].name);

  const handleChange = (event) => {
    const sortBy = event.target.value;
    setSelectedOption(sortBy);

    dispatch(fetchMovies({ sortBy }));
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
