import React, { useState } from 'react';
import MetricsSidebar from '../../../components/Sidebars/MetricsSidebar/MetricsSidebar';

import '../LandingPages.css';

const StatisticsLandingPage = () => {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const toggleIsSideOpen = () => setIsSideOpen(!isSideOpen);
  return (
    <div className="bigBox">
      <MetricsSidebar isOpen={isSideOpen} toggleIsOpen={toggleIsSideOpen} />
      <div id={isSideOpen ? 'openedSidebar' : 'closedSidebar'} className="main">
        <h1>Welcome to Smaprat!</h1>
        <h2 id="description">Start by selecting a metric from the list on the left :)</h2>
      </div>
    </div>
  );
};

export default StatisticsLandingPage;
