import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import HelpView from './HelpView';
import { baseURL } from '../../../config/constants';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import {
  getSampleHelpClassPagesResponse,
  getSampleHelpPageResponse
} from '../../../test-utils/apiMocks';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('ClassView', () => {
  it('should display fetched books', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(path => {
      switch (path) {
        case `${baseURL}/help/testBookName/pages`:
          return Promise.resolve({
            json: () => getSampleHelpClassPagesResponse()
          });
        case `${baseURL}/help/testBookName/pages/introduction`:
          return Promise.resolve({
            json: () => getSampleHelpPageResponse()
          });
        default:
          return null;
      }
    });

    await act(async () => {
      render(<HelpView bookName="testBookName" />, container);
    });

    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/help/testBookName/pages`);
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/help/testBookName/pages/introduction`);
    expect(fetchMock).toHaveBeenCalledTimes(2);

    expect(container.querySelector('h1')).toHaveTextContent('testBookName');

    global.fetch.mockRestore();
  });
});
