import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CategoriesSidebar from './CategoriesSidebar';
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

describe('CategoriesSidebar', () => {
  it('should displayed buttons with fetched categories', async () => {
    const sampleCategoriesResponse = {
      categories: ['SmapratCore', 'SmapratAPI', 'SmapratApp'],
      count: 3
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleCategoriesResponse
      })
    );

    await act(async () => {
      render(<CategoriesSidebar />, container);
    });

    expect(container.querySelectorAll('button.categorybuttons').length).toBe(
      sampleCategoriesResponse.count
    );

    global.fetch.mockRestore();
  });
});
