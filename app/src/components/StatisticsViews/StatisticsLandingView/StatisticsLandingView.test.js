import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import StatisticsLandingView from './StatisticsLandingView';
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

describe('StatisticsLandingView', () => {
  it('should display the statistics landing view site', () => {
    act(() => {
      render(<StatisticsLandingView />, container);
    });

    expect(container.querySelector('h1')).toHaveTextContent('Welcome to Smaprat!');
    expect(container.querySelector('h2')).toHaveTextContent(
      'Start by selecting a metric from the list on the left :)'
    );
  });
});
