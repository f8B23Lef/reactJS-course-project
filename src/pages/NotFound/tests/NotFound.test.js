import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';

describe('NotFound', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
  });

  it('renders the "not found" message', () => {
    const messageElement = screen.getByText(
      'The page you are looking for is not found!',
    );

    expect(messageElement).toBeInTheDocument();
  });

  it('renders a link to the Main page', () => {
    const linkElement = screen.getByRole('link', { name: 'Main Page' });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
