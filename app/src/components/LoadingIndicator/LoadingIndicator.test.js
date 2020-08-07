import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import LoadingIndicator from './LoadingIndicator';
import { cleanUpContainer, prepareContainer } from '../../test-utils/test-helper';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('Loading Indicator', () => {
  it('should display LoadingIndicator', () => {
    act(() => {
      render(<LoadingIndicator />, container);
    });

    expect(container.querySelector('.lds-ellipsis')).toBeInTheDocument();
  });
});
