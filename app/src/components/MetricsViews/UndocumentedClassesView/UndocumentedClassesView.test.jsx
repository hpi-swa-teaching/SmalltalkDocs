import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { baseURL } from '../../../config/constants';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import UndocumentedClassesView from './UndocumentedClassesView';
import { getFetchClassesMock } from '../../../test-utils/apiMocks';

describe('Uncommented Class View', () => {
  const fetchMock = getFetchClassesMock();

  let container = null;
  beforeEach(async () => {
    // setup a DOM element as a render target
    container = prepareContainer(container);
    await act(async () => {
      render(
        <Router>
          <UndocumentedClassesView />
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
    expect(container).toHaveTextContent('RPTestClass');
    expect(container).toHaveTextContent('X509TBSCertificate');
    expect(container).toHaveTextContent('MetacelloAllowProjectUpgrade');
  });

  it('should display fetched classes', async () => {
    expect(container).toHaveTextContent('Uncommented Classes');
  });

  it('should request API only once', () => expect(fetchMock).toBeCalledTimes(1));

  it('should request API with correct path', () =>
    expect(fetchMock).toHaveBeenCalledWith(`${baseURL}/statistics/undocumented/classes`));
});
