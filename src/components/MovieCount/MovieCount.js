import React from 'react';
import PropTypes from 'prop-types';
import './MovieCount.scss';

export default function MovieCount({ value }) {
  return (
    <div className='count'>
      <strong>{value}</strong>
      {' '}
      movies found
    </div>
  );
}

MovieCount.propTypes = {
  value: PropTypes.number.isRequired,
};
