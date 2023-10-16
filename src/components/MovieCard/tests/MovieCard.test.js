import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from '../MovieCard';

jest.mock(
  '../../../components/ThreeDotsMenu/ThreeDotsMenu',
  () => () => 'ThreeDotsMenuComponent',
);

describe('MovieCard', () => {
  let movie;

  beforeEach(() => {
    movie = {
      id: 1,
      title: 'Movie1',
      genres: ['Crime', 'Action'],
      release_date: '2022-10-01',
      poster_path: '/poster',
    };
  });

  it('renders MovieCard snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <MovieCard
          movie={movie}
          onEdit={jest.fn()}
          onDelete={jest.fn()}
          onClick={jest.fn()}
        />
      </BrowserRouter>,
    );

    expect(asFragment(
      <MovieCard
        movie={movie}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        onClick={jest.fn()}
      />,
    )).toMatchSnapshot();
  });

  it('renders image with specific path', () => {
    render(
      <MovieCard
        movie={movie}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        onClick={jest.fn()}
      />,
    );
    const imageElement = screen.getByAltText('movie poster');

    expect(imageElement).toHaveAttribute('src', '/poster');
  });

  it('calls onClick() prop with movie id param on movie card click', () => {
    const onClickMock = jest.fn();
    render(
      <BrowserRouter>
        <MovieCard
          movie={movie}
          onEdit={jest.fn()}
          onDelete={jest.fn()}
          onClick={onClickMock}
        />
      </BrowserRouter>,
    );

    const cardElement = screen.getByTestId('movie-card');
    fireEvent.click(cardElement);

    expect(onClickMock).toHaveBeenCalledWith(movie.id);
  });
});
