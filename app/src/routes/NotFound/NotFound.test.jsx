import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from '@testing-library/react';
import NotFound from './NotFound';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Show expected error message', () => {
  act(() => {
    render(<NotFound />, container);
  });
  expect(container.textContent).toContain('404 Not Found');
});
