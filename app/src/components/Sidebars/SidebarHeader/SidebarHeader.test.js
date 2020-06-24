import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SidebarHeader from './SidebarHeader';
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

describe('Header', () => {
  it('should display the header', () => {
    act(() => {
      render(<SidebarHeader />, container);
    });

    expect(container.textContent).toContain('Smaprat');
  });
});
