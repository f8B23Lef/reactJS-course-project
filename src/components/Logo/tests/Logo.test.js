import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo', () => {
  it('renders Logo snapshot', () => {
    const { asFragment } = render(<Logo src='/logo' />);
    expect(asFragment(<Logo src='/logo' />)).toMatchSnapshot();
  });

  it('renders image with specific class and path', () => {
    render(<Logo src='/logo' />);
    const imageElement = screen.getByAltText('netflix logo');

    expect(imageElement).toHaveAttribute('src', '/logo');
    expect(imageElement).toHaveClass('logo');
  });
});
