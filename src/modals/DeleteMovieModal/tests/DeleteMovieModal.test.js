import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteMovieModal from '../DeleteMovieModal';

const mockedUseDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedUseDispatch,
}));

describe('DeleteMovieModal', () => {
  const onCloseMock = jest.fn();
  const movieId = 1;

  it('renders DeleteMovieModal snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <DeleteMovieModal
          movieId={movieId}
          onClose={onCloseMock}
        />
      </BrowserRouter>,
    );

    expect(asFragment(<DeleteMovieModal
      movieId={movieId}
      onClose={onCloseMock}
    />)).toMatchSnapshot();
  });

  it('calls onClose() on close icon click', () => {
    render(
      <BrowserRouter>
        <DeleteMovieModal
          movieId={movieId}
          onClose={onCloseMock}
        />
      </BrowserRouter>,
    );

    const closeIcon = screen.getByTestId('close-icon');
    fireEvent.click(closeIcon);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls dispatch() on Confirm button click', () => {
    render(
      <BrowserRouter>
        <DeleteMovieModal
          movieId={movieId}
          onClose={onCloseMock}
        />
      </BrowserRouter>,
    );

    const confirmButton = screen.getByRole('button');
    fireEvent.click(confirmButton);

    expect(mockedUseDispatch).toHaveBeenCalled();
  });

  it('calls onClose() on Confirm button click', () => {
    render(
      <BrowserRouter>
        <DeleteMovieModal
          movieId={movieId}
          onClose={onCloseMock}
        />
      </BrowserRouter>,
    );

    const confirmButton = screen.getByRole('button');
    fireEvent.click(confirmButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
