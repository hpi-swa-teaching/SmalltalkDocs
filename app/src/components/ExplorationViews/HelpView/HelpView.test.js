import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import HelpView from './HelpView';
import { baseURL } from '../../../config/constants';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import { getContentOfBookMock, getSampleClassName } from '../../../test-utils/apiMocks';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('Help View', () => {
  it('should display fetched books', async () => {
    const fetchMock = getContentOfBookMock();

    await act(async () => {
      render(<HelpView bookName={getSampleClassName()} />, container);
    });

    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/help/${getSampleClassName()}/pages`);
    expect(fetchMock).toHaveBeenCalledWith(
      `${baseURL}/help/${getSampleClassName()}/pages/introduction`
    );
    expect(fetchMock).toHaveBeenCalledTimes(2);

    expect(container.querySelector('h1')).toHaveTextContent(getSampleClassName());

    global.fetch.mockRestore();
  });
});
