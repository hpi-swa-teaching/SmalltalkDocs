import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ToggleSwitch from './ToggleSwitch';
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

describe('ToggleSwitch', () => {
  it('should display ToggleSwitch', () => {
    const isActive = true;
    const toggleChange = () => {};

    act(() => {
      render(<ToggleSwitch isActive={isActive} toggleChange={toggleChange} />, container);
    });

    expect(container.querySelector('.toggle-switch-checkbox')).toBeInTheDocument();
  });
});
