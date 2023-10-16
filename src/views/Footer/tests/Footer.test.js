import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Footer from '../Footer';

jest.mock('../../../components/Logo/Logo', () => () => 'LogoComponent');

describe('Footer view', () => {
  it('renders Footer view snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});
