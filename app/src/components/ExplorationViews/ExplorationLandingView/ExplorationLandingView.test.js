import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ExplorationLandingView from './ExplorationLandingView';
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

describe('ExplorationLandingView', () => {
  it('should display ExplorationLandingView', () => {
    act(() => {
      render(<ExplorationLandingView />, container);
    });

    expect(container.querySelector('h1')).toHaveTextContent('Welcome to Småprat!');
    expect(container.querySelector('h2')).toHaveTextContent(
      'Start by selecting a class from the list on the left :)'
    );
  });
});
