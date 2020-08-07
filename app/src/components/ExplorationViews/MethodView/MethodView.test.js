import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { baseURL } from '../../../config/constants';
import MethodView from './MethodView';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import { getFetchMethodInfoAndCodeMock } from '../../../test-utils/apiMocks';

let container = null;

const className = 'className';
const site = 'site';
const methodName = 'methodName';
const path = `${baseURL}/env/classes/${className}/methods/${site}/${methodName}`;

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
    const fetchMock = getFetchMethodInfoAndCodeMock(className, site, methodName);

    await act(async () => {
      render(
        <MethodView currentClass={className} site={site} currentMethod={methodName} />,
        container
      );
    });

    expect(fetchMock).toHaveBeenCalledWith(path);

    expect(fetchMock).toHaveBeenCalledWith(`${path}/text`);

    expect(container.querySelector('h1')).toHaveTextContent(methodName);

    expect(container.querySelector('code')).toHaveTextContent(
      'readFrom: aStream ^ self new readFrom: aStream.'
    );

    global.fetch.mockRestore();
  });
});
