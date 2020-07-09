import React, { lazy, Suspense } from 'react';
// base component are small enough to load immediately
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import UnknownStatistics from '../components/StatisticsViews/UnkownStatistics/UnkownStatistics';

// use lazy import for complex components
const UndocumentedClassesView = lazy(() =>
  import('../components/StatisticsViews/UndocumentedClassesView/UndocumentedClassesView')
);

const UndocumentedMethodsView = lazy(() =>
  import('../components/StatisticsViews/UndocumentedMethodsView/UndocumentedMethodsView')
);

const statisticsViewsMapping = {
  undocumentedMethods: {
    component: (
      <Suspense fallback={<LoadingIndicator />}>
        <UndocumentedMethodsView />{' '}
      </Suspense>
    ),
    statisticsName: 'Undocumented Methods'
  },
  undocumentedClasses: {
    component: (
      <Suspense fallback={<LoadingIndicator />}>
        <UndocumentedClassesView />{' '}
      </Suspense>
    ),
    statisticsName: 'Undocumented Classes'
  }
};

export const getStatisticsViewFromParameter = pathParameter =>
  statisticsViewsMapping[pathParameter] == null ? (
    <UnknownStatistics statisticsName={pathParameter} />
  ) : (
    statisticsViewsMapping[pathParameter].component
  );

export const getStatisticsNavigationMapping = () =>
  Object.keys(statisticsViewsMapping).map(aPath => ({
    path: aPath,
    caption: statisticsViewsMapping[aPath].statisticsName
  }));
