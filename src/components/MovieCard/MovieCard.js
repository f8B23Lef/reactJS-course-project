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
      data-testid='movie-card'
      ref={hoverRef}
      onClick={() => onClick(movie.id)}
    >
      <img src={movie.poster_path} alt='movie poster' />
      <ThreeDotsMenu
        isHovered={isHovered}
        tdmItems={tdmItems}
      />
      <div className='movie-summary'>
        <div>
          <p className='title'>{movie.title}</p>
          <p className='description'>{movie.genres.join(', ')}</p>
        </div>
        <div className='year'>{getYearFromDate(movie.release_date)}</div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: 0,
    genres: [],
    runtime: 0,
    overview: '',
  },
};
