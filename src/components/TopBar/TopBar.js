import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Logo from '../Logo/Logo';
import Modal from '../../modals/Modal/Modal';
import AddMovieModal from '../../modals/AddMovieModal/AddMovieModal';
import './TopBar.scss';

export default function TopBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='top-bar'>
      <Logo />
      <button
        type="button"
        className='add-movie__button'
        onClick={() => setShowModal(true)}
      >
        + ADD MOVIE
      </button>
      {showModal && createPortal(
        <Modal onClose={() => setShowModal(false)}>
          <AddMovieModal onClose={() => setShowModal(false)} />
        </Modal>,
        document.body,
      )}
    </div>
  );
}
