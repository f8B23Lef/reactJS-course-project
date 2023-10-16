import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

jest.mock(
  '../../../components/MovieDetails/MovieDetails',
  () => () => 'MovieDetailsComponent',
);
jest.mock(
  '../../../components/TopBar/TopBar',
  () => () => 'TopBarComponent',
);
jest.mock(
  '../../../components/SearchBar/SearchBar',
  () => () => 'SearchBarComponent',
);

describe('Header view', () => {
  it('renders MovieDetails component if "showMovieDetails" and "movie" props '
    + 'are truthy', () => {
    const movie = {
      id: 1,
      title: 'Movie1',
    };

    render(
      <BrowserRouter>
        <Header
          showMovieDetails
          setShowMovieDetails={jest.fn()}
          movie={movie}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText('MovieDetailsComponent')).toBeInTheDocument();
  });

  it('renders TopBar and SearchBar components '
    + 'if "showMovieDetails" prop is false', () => {
    const movie = {
      id: 1,
      title: 'Movie1',
    };

    render(
      <BrowserRouter>
        <Header
          showMovieDetails={false}
          setShowMovieDetails={jest.fn()}
          movie={movie}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText('TopBarComponentSearchBarComponent'))
      .toBeInTheDocument();
  });

  it('renders TopBar and SearchBar components '
  + 'if "movie" prop is falsy', () => {
    render(
      <BrowserRouter>
        <Header
          showMovieDetails
          setShowMovieDetails={jest.fn()}
          movie={null}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText('TopBarComponentSearchBarComponent'))
      .toBeInTheDocument();
  });
});
