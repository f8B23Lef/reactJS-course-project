import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useKeyDown } from '../../hooks/index';
import './ThreeDotsMenu.scss';

export default function ThreeDotsMenu(props) {
  const {
    isHovered,
    tdmItems,
  } = props;

  const [showTDM, setShowTDM] = useState(false);

  useKeyDown('Escape', () => setShowTDM(false));

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <FontAwesomeIcon
        icon={faEllipsisV}
        className={`tdm__icon ${isHovered ? '' : 'hidden'}`}
        onClick={() => setShowTDM(true)}
      />
      <div className={`three-dots-menu ${showTDM ? '' : 'hidden'}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className='tdm-close__icon'
          onClick={() => setShowTDM(false)}
        />
        {tdmItems.map(({ itemText, onClick }) => (
          <button
            type='button'
            key={itemText}
            onClick={() => { setShowTDM(false); onClick(); }}
          >
            {itemText}
          </button>
        ))}
      </div>
    </div>
  );
}

ThreeDotsMenu.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  tdmItems: PropTypes.arrayOf(PropTypes.shape({
    itemText: PropTypes.string,
    onClick: PropTypes.func,
  })).isRequired,
};
