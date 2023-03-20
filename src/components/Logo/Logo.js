import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/netflixLogo.png';
import './Logo.scss';

export default function Logo({ src }) {
  return (
    <img className='logo' src={src} alt='netflix logo' />
  );
}

Logo.propTypes = {
  src: PropTypes.string,
};

Logo.defaultProps = {
  src: logo,
};
