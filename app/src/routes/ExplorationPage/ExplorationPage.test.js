import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import ExplorationPage from './ExplorationPage';
import { cleanUpContainer, prepareContainer } from '../../test-utils/test-helper';

jest.doMock('../../components/ExplorationViews/ClassView/ClassView', () => () => (
  <div id="classViewMock" />
));

jest.doMock('../../components/ExplorationViews/MethodView/MethodView', () => () => (
  <div id="methodViewMock" />
));

jest.doMock('../../components/ExplorationViews/HelpView/HelpView', () => () => (
  <div id="helpViewMock" />
));

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

xdescribe('ExplorationView', () => {
  it('should display the ExplorationPage for mode: class', async () => {
    const mode = 'class';

    await act(async () => {
      render(
        <Router>
          <ExplorationPage mode={mode} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('#openedSidebar')).toBeInTheDocument();
    expect(container.querySelector('#classViewMock')).toBeInTheDocument();
    expect(container.querySelector('#methodViewMock')).toBeNull();
    expect(container.querySelector('#helpViewMock')).toBeNull();
  });

  it('should display the ExplorationPage for mode: method', async () => {
    const mode = 'method';

    await act(async () => {
      render(
        <Router>
          <ExplorationPage mode={mode} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('#openedSidebar')).toBeInTheDocument();
    expect(container.querySelector('#classViewMock')).toBeNull();
    expect(container.querySelector('#methodViewMock')).toBeInTheDocument();
    expect(container.querySelector('#helpViewMock')).toBeNull();
  });

  it('should display the ExplorationPage for mode: help', async () => {
    const mode = 'help';

    await act(async () => {
      render(
        <Router>
          <ExplorationPage mode={mode} />
        </Router>,
        container
      );
    });

    expect(container.querySelector('#openedSidebar')).toBeInTheDocument();
    expect(container.querySelector('#classViewMock')).toBeNull();
    expect(container.querySelector('#methodViewMock')).toBeNull();
    expect(container.querySelector('#helpViewMock')).toBeInTheDocument();
  });
});
