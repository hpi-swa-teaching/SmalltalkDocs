import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ClassView from './ClassView';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import { baseURL } from '../../../config/constants';
import {
  getClassMock,
  getFetchMethodsMock,
  getSampleClassName,
  getSampleMethodsOfClassResponse
} from '../../../test-utils/apiMocks';

describe('ClassView', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = prepareContainer(container);
  });

  afterEach(() => {
    // cleanup on exiting
    container = cleanUpContainer(container);
    jest.clearAllMocks();
  });

  it('should display the total count of fetched methods', async () => {
    const fetchMock = getFetchMethodsMock();

    await act(async () => {
      render(<ClassView currentClass={getSampleClassName()} />, container);
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `${baseURL}/env/classes/${getSampleClassName()}/methods`
    );
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/env/classes/${getSampleClassName()}`);

    expect(container).toHaveTextContent(getSampleMethodsOfClassResponse().count.total);
  });

  it('should display class view without comment', async () => {
    getFetchMethodsMock();

    await act(async () => {
      render(<ClassView currentClass={getSampleClassName()} />, container);
    });

    expect(container.querySelector('.comment')).toBeNull();
  });

  it('should display class view with comment', async () => {
    getClassMock();

    await act(async () => {
      render(<ClassView currentClass={getSampleClassName()} />, container);
    });

    expect(container.querySelector('.comment')).toBeInTheDocument();
    expect(container.querySelector('.commentText')).toHaveTextContent('this is a class comment');
  });
});
