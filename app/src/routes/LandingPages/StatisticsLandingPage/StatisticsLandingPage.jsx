import React from 'react';
import MetricsSidebar from '../../../components/MetricsSidebar/MetricsSidebar';
import '../LandingPages.css';
import './StatisticsLandingPage.css';

const StatisticsLandingPage = () => (
  <div className="bigBox">
    <div>
      <MetricsSidebar />
    </div>
    <div className="main">
      <h1>Welcome to Smaprat!</h1>
      <h2 id="description">Start by selecting a metric from the list on the left :)</h2>
    </div>
  </div>
);

export default StatisticsLandingPage;
