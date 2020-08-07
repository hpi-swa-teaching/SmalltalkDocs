import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MethodSidebar from './MethodSidebar';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import { getFetchMethodsMock } from '../../../test-utils/apiMocks';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('Method Sidebar', () => {
  it('should display fetched class and its methods', async () => {
    const isOpen = true;
    const toggleIsOpen = () => {};

    getFetchMethodsMock();

    await act(async () => {
      render(
        <BrowserRouter>
          <MethodSidebar currentClass="test" toggleIsOpen={toggleIsOpen} isOpen={isOpen} />
        </BrowserRouter>,
        container
      );
    });

    expect(container).toHaveTextContent('Categories');
    expect(container).toHaveTextContent('getHelpPagesFrom:');

    global.fetch.mockRestore();
  });
});
