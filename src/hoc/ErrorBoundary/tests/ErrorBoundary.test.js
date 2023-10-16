import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders error message if Error thrown', () => {
    jest.spyOn(console, 'error').mockImplementation(() => null);

    const ThrowError = () => {
      throw new Error('Some Error');
    };
    render(
      <ErrorBoundary fallback={<ErrorBoundary />}>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Ooops... There was a problem: Some Error'))
      .toBeInTheDocument();
  });

  it('renders child components if no Errors', () => {
    function TestComponent() {
      return (<div>TestComponent</div>);
    }

    render(
      <ErrorBoundary fallback={<ErrorBoundary />}>
        <TestComponent />
      </ErrorBoundary>,
    );

    expect(screen.getByText('TestComponent')).toBeInTheDocument();
  });
});
