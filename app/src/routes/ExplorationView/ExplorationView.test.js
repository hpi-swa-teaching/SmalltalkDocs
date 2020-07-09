import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
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

/* eslint-disable global-require */

describe('ExplorationView', () => {
  it('should display the ExplorationView for mode: class', () => {
    const mode = 'class';

    const ExplorationView = require('./ExplorationView').default;

    act(() => {
      render(
        <MemoryRouter>
          <ExplorationView mode={mode} />
        </MemoryRouter>,
        container
      );
    });

    expect(container.querySelector('#openedSidebar')).toBeInTheDocument();
    expect(container.querySelector('#classViewMock')).toBeInTheDocument();
    expect(container.querySelector('#methodViewMock')).toBeNull();
    expect(container.querySelector('#helpViewMock')).toBeNull();
  });

  it('should display the ExplorationView for mode: method', () => {
    const mode = 'method';

    const ExplorationView = require('./ExplorationView').default;

    act(() => {
      render(
        <MemoryRouter>
          <ExplorationView mode={mode} />
        </MemoryRouter>,
        container
      );
    });

    expect(container.querySelector('#openedSidebar')).toBeInTheDocument();
    expect(container.querySelector('#classViewMock')).toBeNull();
    expect(container.querySelector('#methodViewMock')).toBeInTheDocument();
    expect(container.querySelector('#helpViewMock')).toBeNull();
  });

  it('should display the ExplorationView for mode: help', () => {
    const mode = 'help';

    const ExplorationView = require('./ExplorationView').default;

    act(() => {
      render(
        <MemoryRouter>
          <ExplorationView mode={mode} />
        </MemoryRouter>,
        container
      );
    });

    expect(container.querySelector('#openedSidebar')).toBeInTheDocument();
    expect(container.querySelector('#classViewMock')).toBeNull();
    expect(container.querySelector('#methodViewMock')).toBeNull();
    expect(container.querySelector('#helpViewMock')).toBeInTheDocument();
  });

  /* eslint-enable global-require */
});
