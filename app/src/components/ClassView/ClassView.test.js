import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ClassView from './ClassView';
import { cleanUpContainer, prepareContainer } from '../../test-utils/test-helper';

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

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleMethodsOfClassResponse
      })
    );

    await act(async () => {
      render(<ClassView currentClass="test" />, container);
    });

    expect(container).toHaveTextContent(sampleMethodsOfClassResponse.count.total);

    global.fetch.mockRestore();
  });
});
