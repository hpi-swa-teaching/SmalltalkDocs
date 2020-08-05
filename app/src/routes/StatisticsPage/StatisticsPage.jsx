import React, { useState } from 'react';
import { useParams } from 'react-router';
import MetricsSidebar from '../../components/Sidebars/MetricsSidebar/MetricsSidebar';
import StatisticsLandingView from '../../components/StatisticsViews/StatisticsLandingView/StatisticsLandingView';
import { getStatisticsViewFromParameter } from '../../utils/statisticsMapper';

import './StatisticsPage.css';

const StatisticsPage = () => {
  const pathParams = useParams();
  const [isSideOpen, setIsSideOpen] = useState(true);
  const toggleIsSideOpen = () => setIsSideOpen(!isSideOpen);

  return (
    <div className="bigBox">
      <MetricsSidebar isOpen={isSideOpen} toggleIsOpen={toggleIsSideOpen} />
      <div id={isSideOpen ? 'openedSidebar' : 'closedSidebar'} className="main">
        {'currentMetric' in pathParams ? (
          getStatisticsViewFromParameter(pathParams.currentMetric)
        ) : (
          <StatisticsLandingView />
        )}
      </div>
    </div>
  );
};

export default StatisticsPage;
