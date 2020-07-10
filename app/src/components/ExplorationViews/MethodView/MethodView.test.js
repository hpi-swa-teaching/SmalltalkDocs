import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { baseURL } from '../../../config/constants';
import MethodView from './MethodView';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';

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

describe('MethodView', () => {
  it('should display a current method', async () => {
    const className = 'className';
    const site = 'site';
    const methodName = 'methodName';

    const sampleMethodView = {
      hasPrecodeComment: true,
      precodeComment:
        'This is the main entry point for the JSON parser. See also readFrom: on the class site.'
    };

    const sampleMethodViewText = `${methodName}\n\t^ 'MethodText-was-shown!'.`;

    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(arg => {
      switch (arg) {
        case `${baseURL}/env/classes/${className}/methods/${site}/${methodName}`:
          return Promise.resolve({
            json: () => sampleMethodView
          });
        case `${baseURL}/env/classes/${className}/methods/${site}/${methodName}/text`:
          return Promise.resolve({
            text: () => sampleMethodViewText
          });
        default:
          break;
      }
      return null;
    });

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
    expect(container.querySelector('code')).toHaveTextContent('MethodText-was-shown!');

    global.fetch.mockRestore();
  });
});
