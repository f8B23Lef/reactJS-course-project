/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ErrorBoundary.scss';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <h1>{`Ooops... There was a problem: ${this.state.error.message}`}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
