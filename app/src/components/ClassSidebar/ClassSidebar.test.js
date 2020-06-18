import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ClassSidebar from './ClassSidebar';

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

// mock useLocation()
jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa'
  })
}));

xdescribe('ClassSidebar', () => {
  it('should displayed fetched classes', async () => {
    const sampleAllClassesResponse = {
      classes: ['RPTestClass', 'X509TBSCertificate', 'MetacelloAllowProjectUpgrade'],
      count: 3
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleAllClassesResponse
      })
    );

    await act(async () => {
      render(<ClassSidebar />, container);
    });

    expect(container.querySelectorAll('NavLink').length).toBe(sampleAllClassesResponse.count);

    global.fetch.mockRestore();
  });
});
