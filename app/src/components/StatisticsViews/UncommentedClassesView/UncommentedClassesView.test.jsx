import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { baseURL } from '../../../config/constants';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import UncommentedClassesView from './UncommentedClassesView';

describe('UncommentedClassView', () => {
  const sampleUncommentedClassesResponse = { classes: ['Class1', 'Class2', 'Class3'] };

  const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => sampleUncommentedClassesResponse
    })
  );

  let container = null;
  beforeEach(async () => {
    // setup a DOM element as a render target
    container = prepareContainer(container);
    await act(async () => {
      render(
        <Router>
          <UncommentedClassesView />
        </Router>,
        container
      );
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    container = cleanUpContainer(container);
  });

  it('should display fetched classes', async () => {
    expect(container).toHaveTextContent('Class1');
    expect(container).toHaveTextContent('Class2');
    expect(container).toHaveTextContent('Class3');
  });

  it('should display fetched classes', async () => {
    expect(container).toHaveTextContent('Uncommented Classes');
  });

  it('should request API only once', () => expect(fetchMock).toBeCalledTimes(1));

  it('should request API with correct path', () =>
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/statistics/undocumented/classes`));
});
