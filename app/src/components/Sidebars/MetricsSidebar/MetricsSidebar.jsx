import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getMetricsNavigationMapping } from './metricsMapper';
import SidebarHeader from '../SidebarHeader/SidebarHeader';

import '../Sidebars.css';
import './MetricsSidebar.css';

const MetricsSidebar = props => {
  const { isOpen, toggleIsOpen } = props;
  return (
    <div id={isOpen ? 'openSidebarBox' : 'closedSidebarBox'} className="sidenav">
      <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
      {isOpen ? <p className="secondarySidebarTitle">Metrics</p> : null}
      <ul>
        {getMetricsNavigationMapping().map(aMetrics => (
          <li className="metricsList" key={`${aMetrics.caption}`}>
            <div className="metricsLinkBox">
              <NavLink className="metricsLink" hidden={!isOpen} to={`/statistics/${aMetrics.path}`}>
                {aMetrics.caption}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

MetricsSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired
};

export default MetricsSidebar;
