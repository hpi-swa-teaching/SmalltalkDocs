import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CategoriesSidebar from './CategoriesSidebar';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('CategoriesSidebar', () => {
  it('should displayed buttons with fetched categories', async () => {
    const sampleCategoriesResponse = {
      categories: ['SmapratCore', 'SmapratAPI', 'SmapratApp'],
      count: 3
    };

    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
          json: () => sampleCategoriesResponse
        })
    );

    await act(async () => {
      render(<CategoriesSidebar />, container);
    });

    expect(container.querySelectorAll('button.categorybuttons').length).toBe(sampleCategoriesResponse.count);

    global.fetch.mockRestore();
  });
});
