import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThreeDotsMenu from '../ThreeDotsMenu/ThreeDotsMenu';
import getYearFromDate from '../../utils/utils';
import './MovieCard.scss';

export default function MovieCard(props) {
  const {
    movie,
    onEdit,
    onDelete,
  } = props;

  const [isHovered, setHover] = useState(false);

  const tdmItems = [{
    itemText: 'Edit',
    onClick: onEdit.bind(null, movie.id),
  }, {
    itemText: 'Delete',
    onClick: onDelete.bind(null, movie.id),
  }];

  return (
    <div
      className='movie-card'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={movie.poster} alt='movie poster' />
      <ThreeDotsMenu
        isHovered={isHovered}
        tdmItems={tdmItems}
      />
      <div className='movie-summary'>
        <div>
          <p className='title'>{movie.title}</p>
          <p className='description'>{movie.genres.join(', ')}</p>
        </div>
        <div className='year'>{getYearFromDate(movie.releaseDate)}</div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    url: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    description: PropTypes.string,
    poster: PropTypes.string.isRequired,
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    releaseDate: '',
    url: '',
    rating: 0,
    genres: [],
    runtime: 0,
    description: '',
  },
};
