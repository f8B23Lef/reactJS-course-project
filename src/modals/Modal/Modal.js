import React from 'react';
import PropTypes from 'prop-types';
import { useKeyDown } from '../../hooks/index';
import { KEYS } from '../../utils/constants';
import './Modal.scss';

export default function Modal(props) {
  const {
    onClose,
    children,
  } = props;

  useKeyDown(KEYS.ESCAPE_KEY, onClose);

  return (
    <div className='modal'>
      <div className='modal-content'>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Modal.defaultProps = {
  children: null,
};
