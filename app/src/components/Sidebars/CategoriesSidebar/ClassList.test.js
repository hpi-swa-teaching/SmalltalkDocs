import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import ClassList from './ClassList';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import { baseURL } from '../../../config/constants';
import { getFetchClassesMock } from '../../../test-utils/apiMocks';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('ClassList', () => {
  it('should display ClassList', async () => {
    const fetchMock = getFetchClassesMock();

    await act(async () => {
      render(
        <Router>
          <ClassList categoryName="category1" />
        </Router>,
        container
      );
    });

    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/categories/category1`);

    expect(container.querySelectorAll('li').length).toBe(3);
  });
});
