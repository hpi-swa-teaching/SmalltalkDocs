import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import ResultEnumeration from './ResultEnumerationItem';
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

describe('Result Enumeration', () => {
  it('should display the result enumeration side', () => {
    const testLinkText = 'test';
    const testLinkPath = 'test';

    act(() => {
      render(
        <Router>
          <ResultEnumeration linkText={testLinkText} linkPath={testLinkPath} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('.resultEnumerationList')).toBeInTheDocument();
  });
});
