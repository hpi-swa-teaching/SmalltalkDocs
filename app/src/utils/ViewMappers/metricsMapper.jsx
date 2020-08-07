import React, { lazy, Suspense } from 'react';
// base component are small enough to load immediately
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import UnknownStatistics from '../../components/MetricsViews/UnkownMetrics/UnknownMetrics';

// use lazy import for complex components
const UndocumentedClassesView = lazy(() =>
  import('../../components/MetricsViews/UndocumentedClassesView/UndocumentedClassesView')
);

const UndocumentedMethodsView = lazy(() =>
  import('../../components/MetricsViews/UndocumentedMethodsView/UndocumentedMethodsView')
);

// each key represents a URL suffix
const metricsViewsMapping = {
  undocumentedMethods: {
    component: (
      <Suspense fallback={<LoadingIndicator />}>
        <UndocumentedMethodsView />
      </Suspense>
    ),
    metricsName: 'Undocumented Methods'
  },
  undocumentedClasses: {
    component: (
      <Suspense fallback={<LoadingIndicator />}>
        <UndocumentedClassesView />
      </Suspense>
    ),
    metricsName: 'Undocumented Classes'
  }
};

export const getMetricsViewFromParameter = pathParameter =>
  metricsViewsMapping[pathParameter] == null ? (
    <UnknownStatistics statisticsName={pathParameter} />
  ) : (
    metricsViewsMapping[pathParameter].component
  );

export const getMetricsNavigationMapping = () =>
  Object.keys(metricsViewsMapping).map(aPath => ({
    path: aPath,
    caption: metricsViewsMapping[aPath].metricsName
  }));
