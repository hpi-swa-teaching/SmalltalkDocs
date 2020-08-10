import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import UnknownStatistics from './UnknownMetrics';
import { cleanUpContainer, prepareContainer } from '../../../test-utils/test-helper';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = prepareContainer(container);
});

afterEach(() => {
  // cleanup on exiting
  container = cleanUpContainer(container);
});

describe('Unknown Statistics', () => {
  it('should display UnknownStatistics side', () => {
    const testStatisticsName = 'test';

    act(() => {
      render(<UnknownStatistics statisticsName={testStatisticsName} />, container);
    });

    expect(container).toHaveTextContent(`Statistics ${testStatisticsName} not found`);
  });
});
