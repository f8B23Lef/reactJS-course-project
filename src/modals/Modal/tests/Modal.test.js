/* eslint-disable react/no-children-prop */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal', () => {
  const onCloseMock = jest.fn();
  const children = `
    <div>Children1</div>
    <div>Children2</div>
  `;

  it('renders Modal snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Modal
          children={children}
          onClose={onCloseMock}
        />
      </BrowserRouter>,
    );

    expect(asFragment(<Modal
      children={children}
      onClose={onCloseMock}
    />)).toMatchSnapshot();
  });

  it('calls onClose() on Escape button click', () => {
    render(
      <BrowserRouter>
        <Modal
          children={children}
          onClose={onCloseMock}
        />
      </BrowserRouter>,
    );

    fireEvent.keyDown(document.body, { key: 'Escape' });
    expect(onCloseMock).toHaveBeenCalled();
  });
});
