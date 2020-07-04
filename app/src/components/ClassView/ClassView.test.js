import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ClassView from './ClassView';
import { cleanUpContainer, prepareContainer } from '../../test-utils/test-helper';
import { baseURL } from '../../config/constants';

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
  it('should display the total count of fetched methods', async () => {
    const sampleMethodsOfClassResponse = {
      classMethods: ['newStarted', 'newStartedOn:'],
      count: { classMethods: 2, total: 12, instanceMethods: 10 },
      instanceMethods: [
        'getHelpPagesFrom:',
        'getClassMethodTextFrom:named:',
        'getInstanceMethodFrom:named:',
        'getMethods:',
        'getClasses',
        'getHelpPageFrom:at:',
        'helloWorld:',
        'getClassMethodFrom:named:',
        'getHelpBookFrom:',
        'getInstanceMethodTextFrom:named:'
      ]
    };

    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleMethodsOfClassResponse
      })
    );

    await act(async () => {
      render(<ClassView currentClass="test" />, container);
    });

    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/classes/test/methods`);
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/classes/test`);

    expect(container).toHaveTextContent(sampleMethodsOfClassResponse.count.total);

    global.fetch.mockRestore();
  });
  it('should display class view without comment', async () => {
    const sampleMethodsOfClassResponse = {
      classMethods: ['newStarted', 'newStartedOn:'],
      count: { classMethods: 2, total: 12, instanceMethods: 10 },
      instanceMethods: []
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleMethodsOfClassResponse
      })
    );

    await act(async () => {
      render(<ClassView currentClass="test" />, container);
    });

    expect(container.querySelector('.comment')).toBeNull();

    global.fetch.mockRestore();
  });
  it('should display class view with comment', async () => {
    const sampleClassResponse = {
      count: { classMethods: 2, total: 12, instanceMethods: 10 },
      hasClassComment: true,
      classComment: 'this is a class comment'
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleClassResponse
      })
    );

    await act(async () => {
      render(<ClassView currentClass="test" />, container);
    });

    expect(container.querySelector('.comment')).toBeInTheDocument();
    expect(container.querySelector('.commentText')).toHaveTextContent('this is a class comment');

    global.fetch.mockRestore();
  });
});
