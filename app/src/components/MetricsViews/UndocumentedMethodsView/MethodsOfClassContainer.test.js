import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import MethodsOfClassContainer from './MethodsOfClassContainer';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import {
  getSampleClassName,
  getUndocumentedMethodsOfClassAPIMock
} from '../../../test-utils/apiMocks';
import { baseURL } from '../../../config/constants';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('Methods Of Class Container', () => {
  it('should display the MethodsOfClassContainer site', async () => {
    const fetchMock = getUndocumentedMethodsOfClassAPIMock();

    await act(async () => {
      render(
        <Router>
          <MethodsOfClassContainer theClassName={getSampleClassName()} />
        </Router>,
        container
      );
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `${baseURL}/statistics/undocumented/methods/${getSampleClassName()}`
    );
  });
});
