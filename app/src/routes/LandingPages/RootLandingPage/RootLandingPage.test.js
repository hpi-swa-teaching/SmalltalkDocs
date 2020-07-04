import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { fireEvent } from '@testing-library/react';
import RootLandingPage from './RootLandingPage';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';

const history = createMemoryHistory();
const pushSpy = jest.spyOn(history, 'push');

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('RootLandingPage', () => {
  it('should display the RootLandingPage', () => {
    act(() => {
      render(
        <Router history={history}>
          <RootLandingPage />
        </Router>,
        container
      );
    });

    expect(container.querySelector('.frame')).toBeInTheDocument();
  });

  it('should enter doku on button trigger', () => {
    act(() => {
      render(
        <Router history={history}>
          <RootLandingPage />
        </Router>,
        container
      );
    });

    fireEvent.click(container.querySelectorAll('.enterbutton')[0]);

    expect(pushSpy).toHaveBeenCalledTimes(1);
  });

  it('should enter statistics on button trigger', () => {
    act(() => {
      render(
        <Router history={history}>
          <RootLandingPage />
        </Router>,
        container
      );
    });

    fireEvent.click(container.querySelectorAll('.enterbutton')[1]);

    expect(pushSpy).toHaveBeenCalledTimes(1);
  });
});
