import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import MethodList from './MethodList';
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

describe('Method List', () => {
  it('should display MethodList', () => {
    const currentClass = 'currentClass';
    const side = 'side';
    const methodNames = ['methodNames1', 'methodNames2', 'methodNames3'];

    act(() => {
      render(
        <Router>
          <MethodList currentClass={currentClass} side={side} methodNames={methodNames} />
        </Router>,
        container
      );
    });

    expect(container.querySelectorAll('li').length).toBe(3);
  });
});
