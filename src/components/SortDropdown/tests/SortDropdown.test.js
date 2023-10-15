import React, { useState as useStateMock } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import SortDropdown from '../SortDropdown';
import { SORT_BY } from '../../../utils/constants';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('SortDropdown', () => {
  const setStateMock = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setStateMock]);
  });

  it('finds select option button by text', () => {
    render(
      <BrowserRouter>
        <SortDropdown options={SORT_BY} />
      </BrowserRouter>,
    );

    SORT_BY.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('calls setState() with specific param on sort option click', () => {
    render(
      <BrowserRouter>
        <SortDropdown options={SORT_BY} />
      </BrowserRouter>,
    );

    const select = screen.getByTestId('sort-select');
    fireEvent.change(select, { target: { value: SORT_BY[0].value } });

    expect(setStateMock).toHaveBeenCalledWith(SORT_BY[0].value);
  });
});
