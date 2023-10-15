import React, { useState as useStateMock } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import GenreToggle from '../GenreToggle';
import { FILTER_GENRES } from '../../../utils/constants';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('GenreToggle', () => {
  const setStateMock = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setStateMock]);
  });

  it('finds genre button by text', () => {
    render(
      <BrowserRouter>
        <GenreToggle genres={FILTER_GENRES} />
      </BrowserRouter>,
    );

    FILTER_GENRES.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('adds "active" class on genre button click', () => {
    useStateMock.mockImplementation(jest.requireActual('react').useState);
    render(
      <BrowserRouter>
        <GenreToggle genres={FILTER_GENRES} />
      </BrowserRouter>,
    );

    const button = screen.getByText(FILTER_GENRES[1].name);
    expect(button).not.toHaveClass('active');
    fireEvent.click(button);
    expect(button).toHaveClass('active');
  });

  it('calls setState() with specific param on genre button click', () => {
    render(
      <BrowserRouter>
        <GenreToggle genres={FILTER_GENRES} />
      </BrowserRouter>,
    );

    const button = screen.getByText(FILTER_GENRES[1].name);
    fireEvent.click(button);

    expect(setStateMock).toHaveBeenCalledWith(FILTER_GENRES[1].value);
  });
});
