import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import DokuLandingPage from './DokuLandingPage';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('DokuLandingPage', () => {
  it('should display the DokuLandingPage', () => {
    act(() => {
      render(
        <MemoryRouter>
          <DokuLandingPage />
        </MemoryRouter>,
        container
      );
    });

    expect(container.querySelector('.bigBox')).toBeInTheDocument();
  });
});
