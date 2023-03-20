import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SortDropdown.scss';

export default function SortDropdown({ options }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
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
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

SortDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
