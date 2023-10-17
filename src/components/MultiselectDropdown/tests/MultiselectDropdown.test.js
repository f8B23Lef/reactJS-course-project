import React, { useState as useStateMock } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MultiselectDropdown from '../MultiselectDropdown';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('MultiselectDropdown component', () => {
  const placeholder = 'Some placeholder';
  const options = ['Option1', 'Option2'];
  const checkedOptions = [];
  const onCheckMock = jest.fn();
  const setShowDropdown = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setShowDropdown]);
  });

  it('renders MultiselectDropdown component snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <MultiselectDropdown
          placeholder={placeholder}
          options={options}
          checkedOptions={checkedOptions}
          onCheck={onCheckMock}
        />
      </BrowserRouter>,
    );

    expect(asFragment(
      <MultiselectDropdown
        placeholder={placeholder}
        options={options}
        checkedOptions={checkedOptions}
        onCheck={onCheckMock}
      />,
    )).toMatchSnapshot();
  });

  it('calls setShowDropdown() with true param on ms dp click', () => {
    render(
      <BrowserRouter>
        <MultiselectDropdown
          placeholder={placeholder}
          options={options}
          checkedOptions={checkedOptions}
          onCheck={onCheckMock}
        />
      </BrowserRouter>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setShowDropdown).toHaveBeenCalledWith(true);
  });

  it('calls onCheck() with empty array param on option click', () => {
    render(
      <BrowserRouter>
        <MultiselectDropdown
          placeholder={placeholder}
          options={options}
          checkedOptions={checkedOptions}
          onCheck={onCheckMock}
        />
      </BrowserRouter>,
    );

    const checkbox = screen.getByText('Option1');
    fireEvent.click(checkbox);

    expect(onCheckMock).toHaveBeenCalledWith(['Option1']);
  });
});
