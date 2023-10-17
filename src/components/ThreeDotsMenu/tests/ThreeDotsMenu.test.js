import React, { useState as useStateMock } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ThreeDotsMenu from '../ThreeDotsMenu';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('ThreeDotsMenu component', () => {
  const onClickMock = jest.fn();
  const onDeleteMock = jest.fn();
  const tdmItems = [{
    itemText: 'Edit',
    onClick: onClickMock,
  }, {
    itemText: 'Delete',
    onClick: onDeleteMock,
  }];
  const isHovered = true;
  const setStateMock = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setStateMock]);
  });

  it('renders ThreeDotsMenu component snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ThreeDotsMenu
          tdmItems={tdmItems}
          isHovered={isHovered}
        />
      </BrowserRouter>,
    );

    expect(asFragment(<ThreeDotsMenu
      tdmItems={tdmItems}
      isHovered={isHovered}
    />)).toMatchSnapshot();
  });

  tdmItems.forEach(({ itemText, onClick }) => {
    it(`calls onClick() from tdmItems prop on ${itemText} button click`, () => {
      render(
        <BrowserRouter>
          <ThreeDotsMenu
            tdmItems={tdmItems}
            isHovered={isHovered}
          />
        </BrowserRouter>,
      );

      const tdmButton = screen.getByText(itemText);
      fireEvent.click(tdmButton);

      expect(onClick).toHaveBeenCalled();
    });
  });

  it('calls setShowTDM() with true param on tdm icon click', () => {
    render(
      <BrowserRouter>
        <ThreeDotsMenu
          tdmItems={tdmItems}
          isHovered={isHovered}
        />
      </BrowserRouter>,
    );

    const icon = screen.getByTestId('tdm-icon');
    fireEvent.click(icon);

    expect(setStateMock).toHaveBeenCalledWith(true);
  });

  it('calls setShowTDM() with false param on close icon click', () => {
    render(
      <BrowserRouter>
        <ThreeDotsMenu
          tdmItems={tdmItems}
          isHovered={isHovered}
        />
      </BrowserRouter>,
    );

    const closeIcon = screen.getByTestId('tdm-close-icon');
    fireEvent.click(closeIcon);

    expect(setStateMock).toHaveBeenCalledWith(false);
  });
});
