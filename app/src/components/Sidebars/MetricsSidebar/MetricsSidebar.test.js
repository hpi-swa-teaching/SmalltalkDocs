import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MetricsSidebar from './MetricsSidebar';
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

describe('MetricsSidebar', () => {
  it('should display the metrics sidebar', () => {
    act(() => {
      render(<MetricsSidebar options />, container);
    });

    expect(container.querySelector('#SideBox')).toBeInTheDocument();
  });
});
