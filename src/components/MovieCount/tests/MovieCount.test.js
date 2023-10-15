import React from 'react';
import { render } from '@testing-library/react';
import MovieCount from '../MovieCount';

describe('MovieCount', () => {
  it('renders MovieCount snapshot', () => {
    const { asFragment } = render(<MovieCount value={3} />);

    expect(asFragment(<MovieCount value={3} />)).toMatchSnapshot();
  });
});
