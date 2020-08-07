import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import MethodsOfClassContainer from './MethodsOfClassContainer';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';
import { baseURL } from '../../../config/constants';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

const undocumentedMethodsOfClass = {
  classMethods: ['fromSton:'],
  count: {
    classMethods: 1,
    total: 24,
    instanceMethods: 23
  },
  instanceMethods: ['addInstVarNames:', 'asClassDefinition', 'asHelpTopic', 'withClassVersion:']
};

describe('MethodsOfClassContainer', () => {
  it('should display the MethodsOfClassContainer site', async () => {
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({ json: () => undocumentedMethodsOfClass }));

    const testClassName = 'testClassName';
    const testIsActive = true;

    await act(async () => {
      render(
        <Router>
          <MethodsOfClassContainer isActive={testIsActive} theClassName={testClassName} />
        </Router>,
        container
      );
    });

    expect(fetchMock).toHaveBeenCalledWith(
      `${baseURL}/statistics/undocumented/methods/${testClassName}`
    );
  });
});
