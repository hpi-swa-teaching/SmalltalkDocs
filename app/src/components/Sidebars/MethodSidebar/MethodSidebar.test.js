import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MethodSidebar from './MethodSidebar';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('MethodSidebar', () => {
  it('should display fetched class and its methods', async () => {
    const isOpen = true;
    const toggleIsOpen = () => {};

    const sampleClassAndMethodsOfClassResponse = {
      isHelpBook: true,
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
        json: () => sampleClassAndMethodsOfClassResponse
      })
    );

    await act(async () => {
      render(
        <Router>
          <MethodSidebar currentClass="test" toggleIsOpen={toggleIsOpen} isOpen={isOpen} />
        </Router>,
        container
      );
    });

    expect(container).toHaveTextContent('Categories');
    expect(container).toHaveTextContent('Help Page');

    global.fetch.mockRestore();
  });
});
