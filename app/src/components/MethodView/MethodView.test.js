import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { baseURL } from '../../config/constants';
import MethodView from './MethodView';
import { cleanUpContainer, prepareContainer } from '../../test-utils/test-helper';

jest.mock('react-syntax-highlighter', () => ({
  __esModule: true,
  default: () => <div />
}));

let container = null;
beforeEach(() => {
  jest.clearAllMocks();
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

// TODO this test doesnt work because of react-syntax-highlighter, no idea how to solve it already tried using mock
xdescribe('MethodView', () => {
  it('should display a current method', async () => {
    const className = 'className';
    const site = 'site';
    const methodName = 'methodName';

    const sampleMethodView = {
      sampleMethodInfoResponse: {
        hasPrecodeComment: true,
        precodeComment:
          'This is the main entry point for the JSON parser. See also readFrom: on the class site.'
      },
      sampleMethodName: 'aSampleMethod:'
    };

    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleMethodView
      })
    );

    await act(async () => {
      render(
        <MethodView currentClass={className} site={site} currentMethod={methodName} />,
        container
      );
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `${baseURL}/env/classes/${className}/methods/${site}/${methodName}`
    );
    expect(fetchMock).toHaveBeenCalledWith(
      `${baseURL}/env/classes/${className}/methods/${site}/${methodName}/text`
    );
    expect(container.querySelector('h1')).toHaveTextContent(methodName);

    global.fetch.mockRestore();
  });
});
