import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import SearchExplorer from './SearchExplorer';
import { baseURL } from '../../config/constants';
import { cleanUpContainer, prepareContainer } from '../../test-utils/test-helper';

let container = null;
const sampleSearchTerm = 'test%test';

beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  jest.clearAllMocks();
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('SearchExplorer', () => {
  it('should display search form', async () => {
    await act(async () => {
      render(<SearchExplorer />, container);
    });

    expect(container.querySelector('form')).toBeInTheDocument();
  });

  // TODO Test must be finished together with component SearchExplorer
  it('should search for classes and methods on submit', async () => {
    const sampleMethods = {
      methods: [
        { className: 'TestClassName1', methodName: 'test1test1', side: 'instance' },
        { className: 'TestClassName2', methodName: 'testThistestMe', side: 'class' },
        { className: 'ThisIsAtestClass', methodName: 'testtest', side: 'instance' }
      ]
    };

    const sampleClasses = {
      classes: ['Test1', 'Test2']
    };

    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(arg => {
      switch (arg) {
        case `${baseURL}/env/search/methods/${sampleSearchTerm}`:
          return Promise.resolve({
            json: () => sampleMethods
          });
        case `${baseURL}/env/search/classes/${sampleSearchTerm}`:
          return Promise.resolve({
            json: () => sampleClasses
          });
        default:
          break;
      }
      return null;
    });

    await act(async () => {
      render(<SearchExplorer />, container);
    });

    fireEvent.change(container.querySelector('input[id=searchInput]'), {
      target: { value: sampleSearchTerm }
    });

    await act(async () => {
      fireEvent.click(container.querySelector('input[id=searchSubmit]'));
    });

    // console.log(fetchMock.mock.calls);
    expect(fetchMock).toBeCalledWith(`${baseURL}/env/search/methods/${sampleSearchTerm}`);
    expect(fetchMock).toBeCalledWith(`${baseURL}/env/search/classes/${sampleSearchTerm}`);

    global.fetch.mockRestore();
  });
});
