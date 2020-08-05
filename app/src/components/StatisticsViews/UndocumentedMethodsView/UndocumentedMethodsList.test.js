import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import UndocumentedMethodsList from './UndocumentedMethodsList';
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

describe('UndocumentedMethodsList', () => {
  it('should display the UndocumentedMethodsList site', () => {
    const methodList = ['test1', 'test2'];
    const site = 'test';
    const currentClass = 'test';

    act(() => {
      render(
        <Router>
          <UndocumentedMethodsList
            currentClass={currentClass}
            site={site}
            methodList={methodList}
          />
        </Router>,
        container
      );
    });

    expect(container.querySelector('.navListContainer')).toBeInTheDocument();
  });
});
