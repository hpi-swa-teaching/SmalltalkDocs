import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ClosedSidebarHeader from './ClosedSidebarHeader';


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

it('should display the header', () => {
    render(<ClosedSidebarHeader />, container);
});
