import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
  useLocation: jest.fn().mockImplementation(() => ({ search: '?genre=crime' })),
}));

describe('SearchBar', () => {
  it('renders SearchBar snapshot', () => {
    const { asFragment } = render(<BrowserRouter><SearchBar /></BrowserRouter>);

    expect(asFragment(<SearchBar />)).toMatchSnapshot();
  });

  it('finds placeholder text', () => {
    render(<BrowserRouter><SearchBar /></BrowserRouter>);

    expect(screen.getByPlaceholderText('What do you want to watch?'))
      .toBeInTheDocument();
  });

  it('finds Search button', () => {
    render(<BrowserRouter><SearchBar /></BrowserRouter>);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('changes value when types', () => {
    render(<BrowserRouter><SearchBar /></BrowserRouter>);

    const input = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: 'movie1' } });

    expect(input).toHaveValue('movie1');
  });

  it('calls navigate() on Search button click', () => {
    render(<BrowserRouter><SearchBar /></BrowserRouter>);

    const input = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: 'movie1' } });
    const button = screen.getByText('Search');
    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalledWith({
      pathname: '/search/movie1',
      search: '?genre=crime',
    });
  });

  it('calls navigate() on Enter key click', () => {
    render(<BrowserRouter><SearchBar /></BrowserRouter>);

    const input = screen.getByPlaceholderText('What do you want to watch?');
    fireEvent.change(input, { target: { value: 'movie1' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockedUseNavigate).toHaveBeenCalledWith({
      pathname: '/search/movie1',
      search: '?genre=crime',
    });
  });
});
