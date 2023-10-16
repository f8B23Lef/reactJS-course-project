import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MainContent from '../MainContent';

jest.mock(
  '../../../components/GenreToggle/GenreToggle',
  () => () => 'GenreToggleComponent',
);
jest.mock(
  '../../../components/SortDropdown/SortDropdown',
  () => () => 'SortDropdownComponent',
);
jest.mock(
  '../../../components/MovieCount/MovieCount',
  () => () => 'MovieCountComponent',
);
jest.mock(
  '../../../components/MovieList/MovieList',
  () => () => 'MovieListComponent',
);
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => jest.fn(),
}));

describe('MainContent view', () => {
  it('renders MainContent view snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <MainContent onMovieClick={jest.fn()} />
      </BrowserRouter>,
    );

    expect(asFragment(<MainContent onMovieClick={jest.fn()} />))
      .toMatchSnapshot();
  });
});
