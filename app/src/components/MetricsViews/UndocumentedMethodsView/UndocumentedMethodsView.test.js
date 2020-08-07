import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { getUndocumentedMethodsOfClassAPIMock } from '../../../test-utils/apiMocks';
import UndocumentedMethodsView from './UndocumentedMethodsView';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

xtest('Should display the correct title', async () => {
  getUndocumentedMethodsOfClassAPIMock();
  await act(async () =>
    render(
      <Router>
        <UndocumentedMethodsView />
      </Router>,
      container
    )
  );
  expect(container).toHaveTextContent('Undocumented Methods');
});
