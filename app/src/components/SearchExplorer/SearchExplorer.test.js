import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import SearchExplorer from './SearchExplorer';
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

describe('SearchExplorer', () => {
  it('should display search form', async () => {
    await act(async () => {
      render(<SearchExplorer />, container);
    });

    expect(container.querySelector('form')).toBeInTheDocument();
  });

  // TODO Test must be finished together with component SearchExplorer
  it('should search for class and category on submit', async () => {
    const sampleCategoryAndClass = {
      sampleClassResponse: ['Test1', 'Test2'],
      sampleCategoryResponse: ['Test1', 'Test2']
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => sampleCategoryAndClass
      })
    );

    await act(async () => {
      render(<SearchExplorer />, container);
    });

    fireEvent.change(container.querySelectorAll('input')[0], {
      target: { value: 'Test1' }
    });

    // expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/classes/testClassName`);
    // expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/categories/testClassName`);

    global.fetch.mockRestore();
  });
});
