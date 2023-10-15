import React, { useState as useStateMock } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TopBar from '../TopBar';

jest.mock('../../Logo/Logo', () => () => 'Logo');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('TopBar', () => {
  const setStateMock = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setStateMock]);
  });

  it('renders TopBar snapshot', () => {
    const { asFragment } = render(<TopBar />);

    expect(asFragment(<TopBar />)).toMatchSnapshot();
  });

  it('finds "Add movie" button by text', () => {
    render(<TopBar />);

    expect(screen.getByText('+ ADD MOVIE')).toBeInTheDocument();
  });

  it('calls setState() with specific param on "Add movie" button click', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>,
    );

    const button = screen.getByText('+ ADD MOVIE');
    fireEvent.click(button);

    expect(setStateMock).toHaveBeenCalledWith(true);
  });
});
