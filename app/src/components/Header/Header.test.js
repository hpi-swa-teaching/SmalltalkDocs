import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SidebarHeader from './SidebarHeader';


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

describe('Header', () => {
  it('should display the header', () => {
    act(() => {
      render(<SidebarHeader />, container);
    });

    expect(container.textContent).toContain('Smaprat');
  });
});
