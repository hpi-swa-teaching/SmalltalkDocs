import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import CategoriesSidebar from './CategoriesSidebar';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import { getFetchCategoriesMock } from '../../../test-utils/apiMocks';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('Categories Sidebar', () => {
  it('should displayed buttons with fetched categories', async () => {
    const isOpen = true;
    const toggleIsOpen = () => {};

    getFetchCategoriesMock();

    await act(async () => {
      render(
        <Router>
          <CategoriesSidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('#openSidebarBox')).toBeInTheDocument();

    global.fetch.mockRestore();
  });

  it('should displayed closed sidebar', async () => {
    const isOpen = false;
    const toggleIsOpen = () => {};

    getFetchCategoriesMock();

    await act(async () => {
      render(
        <Router>
          <CategoriesSidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('#closedSidebarBox')).toBeInTheDocument();
    expect(container.querySelector('#openedSidebarBox')).toBeNull();

    global.fetch.mockRestore();
  });
  it('should displayed category list', async () => {
    const isOpen = true;
    const toggleIsOpen = () => {};

    getFetchCategoriesMock();

    await act(async () => {
      render(
        <Router>
          <CategoriesSidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('.secondarySidebarTitle')).toBeInTheDocument();

    global.fetch.mockRestore();
  });
  it('should not displayed category list', async () => {
    const isOpen = false;
    const toggleIsOpen = () => {};

    getFetchCategoriesMock();

    await act(async () => {
      render(
        <Router>
          <CategoriesSidebar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('.secondarySidebarTitle')).toBeNull();

    global.fetch.mockRestore();
  });
});
