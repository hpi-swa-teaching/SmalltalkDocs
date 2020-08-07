import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { baseURL } from '../../../config/constants';
import MethodView from './MethodView';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import {
  getFetchMethodInfoAndCodeMock,
  getSampleClassName,
  getSampleMethodName,
  getSampleSide
} from '../../../test-utils/apiMocks';

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

describe('Method View', () => {
  it('should display a current method', async () => {
    const path = `${baseURL}/env/classes/${getSampleClassName()}/methods/${getSampleSide()}/${getSampleMethodName()}`;
    const fetchMock = getFetchMethodInfoAndCodeMock(
      getSampleClassName(),
      getSampleSide(),
      getSampleMethodName()
    );

    await act(async () => {
      render(
        <MethodView
          currentClass={getSampleClassName()}
          site={getSampleSide()}
          currentMethod={getSampleMethodName()}
        />,
        container
      );
    });

    expect(fetchMock).toHaveBeenCalledWith(path);

    expect(fetchMock).toHaveBeenCalledWith(`${path}/text`);

    expect(container.querySelector('h1')).toHaveTextContent(getSampleMethodName());

    expect(container.querySelector('code')).toHaveTextContent(
      'readFrom: aStream ^ self new readFrom: aStream.'
    );

    global.fetch.mockRestore();
  });
});
