import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  getUndocumentedMethodsAPIMock,
  getSampleUndocumentedMethodsResponse
} from '../../../test-utils/apiMocks';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import UndocumentedMethodsView from './UndocumentedMethodsView';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('UndocumentedMethodsView', () => {
  const fetchMock = getUndocumentedMethodsAPIMock();

  it('Should display the correct title', () => {
    act(() => {
      render(
        <Router>
          <UndocumentedMethodsView />
        </Router>,
        container
      );
    });

    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('should display all undocumented methods', () => {
    act(() => {
      render(
        <Router>
          <UndocumentedMethodsView />
        </Router>,
        container
      );
    });
    expect(container.querySelectorAll('li').length).toBe(
      getSampleUndocumentedMethodsResponse().count
    );
  });
});
