import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import UncommentedClassesView from './UncommentedClassesView';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('UncommentedClassView', () => {
  it('should display fetched classes', async () => {
    await act(async () => {
      render(<UncommentedClassesView />, container);
    });
    // TODO: add related API mock and its testing
    expect(container).toHaveTextContent('Class1');
    expect(container).toHaveTextContent('Class2');
    expect(container).toHaveTextContent('Class3');
    global.fetch.mockRestore();
  });

  it('should display fetched classes', async () => {
    await act(async () => {
      render(<UncommentedClassesView />, container);
    });
    expect(container).toHaveTextContent('Uncommented Classes');
    global.fetch.mockRestore();
  });
});
