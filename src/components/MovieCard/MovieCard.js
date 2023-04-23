import React from 'react';
import PropTypes from 'prop-types';
import ThreeDotsMenu from '../ThreeDotsMenu/ThreeDotsMenu';
import { getYearFromDate } from '../../utils/utils';
import { useHover } from '../../hooks/index';
import './MovieCard.scss';

export default function MovieCard(props) {
  const {
    movie,
    onEdit,
    onDelete,
    onClick,
  } = props;

  const [hoverRef, isHovered] = useHover();

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
      ref={hoverRef}
      onClick={() => onClick(movie)}
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
  onClick: PropTypes.func.isRequired,
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
