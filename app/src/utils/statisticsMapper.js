import React from 'react';
import UndocumentedClassesView from '../components/StatisticsViews/UndocumentedClassesView/UndocumentedClassesView';
import UndocumentedMethodsView from '../components/StatisticsViews/UndocumentedMethodsView/UndocumentedMethodsView';
import UnknownStatistics from '../components/StatisticsViews/UnkownStatistics/UnkownStatistics';

// TODO: implement lazy initialize
const statisticsViewsMapping = {
  undocumentedMethods: {
    component: <UndocumentedMethodsView />,
    statisticsName: 'Undocumented Methods'
  },
  undocumentedClasses: {
    component: <UndocumentedClassesView />,
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
