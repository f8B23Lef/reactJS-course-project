import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import MovieDetails from '../MovieDetails';

jest.mock('../../Logo/Logo', () => () => 'SomeComponent');

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('MovieDetails', () => {
  const movie = {
    id: 1,
    title: 'Movie 1',
    release_date: '2022-10-01',
    vote_average: 8,
    genres: ['crime', 'action'],
    runtime: 120,
    overview: 'Some overview',
    poster_path: 'www.movie1.com',
  };
  const setShowMovieDetails = jest.fn();

  it('renders MovieDetails snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <MovieDetails movie={movie} setShowMovieDetails={setShowMovieDetails} />
      </BrowserRouter>,
    );

    expect(asFragment(
      <MovieDetails movie={movie} setShowMovieDetails={setShowMovieDetails} />,
    )).toMatchSnapshot();
  });

  it('finds movie title', () => {
    render(
      <BrowserRouter>
        <MovieDetails movie={movie} setShowMovieDetails={setShowMovieDetails} />
      </BrowserRouter>,
    );

    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });

  it('calls setShowMovieDetails() on Search icon click', () => {
    render(
      <BrowserRouter>
        <MovieDetails movie={movie} setShowMovieDetails={setShowMovieDetails} />
      </BrowserRouter>,
    );

    const icon = screen.getByTestId('search-icon');
    fireEvent.click(icon);

    expect(setShowMovieDetails).toHaveBeenCalledWith(false);
  });

  it('calls navigate() on Search icon click', () => {
    render(
      <BrowserRouter>
        <MovieDetails movie={movie} setShowMovieDetails={setShowMovieDetails} />
      </BrowserRouter>,
    );

    const icon = screen.getByTestId('search-icon');
    fireEvent.click(icon);

    expect(mockedUseNavigate).toHaveBeenCalledWith('/');
  });
});
