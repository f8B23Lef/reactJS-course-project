import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from '../Home';

jest.mock(
  '../../../hoc/ErrorBoundary/ErrorBoundary',
  () => ({ children }) => children,
);
jest.mock('../../../views/Header/Header', () => () => 'HeaderView');
jest.mock(
  '../../../views/MainContent/MainContent',
  () => () => 'MainContentView',
);
jest.mock('../../../views/Footer/Footer', () => () => 'FooterView');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

describe('Home page', () => {
  it('renders Home page snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(asFragment(<Home />)).toMatchSnapshot();
  });
});
