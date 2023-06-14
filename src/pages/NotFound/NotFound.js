import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <div className='not-found'>
      <h2>The page you are looking for is not found!</h2>
      <p>
        Go back to
        {' '}
        <Link to="/">Main Page</Link>
      </p>
    </div>
  );
}

export default NotFound;
