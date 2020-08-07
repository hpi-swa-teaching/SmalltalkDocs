import React, { useState } from 'react';
import { useParams } from 'react-router';
import MetricsSidebar from '../../components/Sidebars/MetricsSidebar/MetricsSidebar';
import MetricsLandingView from '../../components/MetricsViews/MetricsLandingView/MetricsLandingView';
import { getMetricsViewFromParameter } from '../../components/Sidebars/MetricsSidebar/metricsMapper';
import { metricsKey } from '../../utils/PathHandling/pathMapper';

import './MetricsPage.css';

const MetricsPage = () => {
  const pathParams = useParams();
  const [isSideOpen, setIsSideOpen] = useState(true);
  const toggleIsSideOpen = () => setIsSideOpen(!isSideOpen);

  return (
    <div className="bigBox">
      <MetricsSidebar isOpen={isSideOpen} toggleIsOpen={toggleIsSideOpen} />
      <div id={isSideOpen ? 'openedSidebar' : 'closedSidebar'} className="main">
        {metricsKey() in pathParams ? (
          getMetricsViewFromParameter(pathParams[metricsKey()])
        ) : (
          <MetricsLandingView />
        )}
      </div>
    </div>
  );
};

export default MetricsPage;
