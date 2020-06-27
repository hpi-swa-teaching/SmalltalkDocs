import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import SidebarHeader from './SidebarHeader';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('Header', () => {
  it('should display the header', () => {
    const isOpen = true;
    const toggleIsOpen = () => {};

    act(() => {
      render(
        <Router>
          <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('div.openedHead')).toBeInTheDocument();
  });

  it('should display closed header', () => {
    const isOpen = false;
    const toggleIsOpen = () => {};

    act(() => {
      render(
        <Router>
          <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('div.closedHead')).toBeInTheDocument();
    expect(container.querySelector('div.openedHead')).toBeNull();
  });

  it('should toggle open and closed on button clicked', () => {
    const isOpen = false;
    const toggleIsOpen = jest.fn();

    act(() => {
      render(
        <Router>
          <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('div.closedHead')).toBeInTheDocument();
    expect(container.querySelector('div.openedHead')).toBeNull();

    fireEvent.click(container.querySelector('button.openButton'));

    // mock toggle function should be called once
    expect(toggleIsOpen).toHaveBeenCalled();
  });
});
