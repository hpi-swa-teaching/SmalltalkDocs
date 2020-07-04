import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import MetricsSidebar from './MetricsSidebar';
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

describe('MetricsSidebar', () => {
  it('should display the metrics sidebar', () => {
    const isOpen = true;
    const toggleIsOpen = () => {};

    act(() => {
      render(
        <Router>
          <MetricsSidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('#openSidebarBox')).toBeInTheDocument();
  });

  it('should display not display the metrics title', () => {
    const isOpen = false;
    const toggleIsOpen = () => {};

    act(() => {
      render(
        <Router>
          <MetricsSidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('#closedSidebarBox')).toBeInTheDocument();
    expect(container.querySelector('.secondarySidebarTitle')).toBeNull();
  });
});
