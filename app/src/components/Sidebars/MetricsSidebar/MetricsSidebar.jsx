import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getStatisticsNavigationMapping } from '../../../utils/statisticsMapper';
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
        {getStatisticsNavigationMapping().map(aStatistics => (
          <li className="metricsList" key={`${aStatistics.caption}`}>
            <div className="metricsLinkBox">
              <NavLink
                className="metricsLink"
                hidden={!isOpen}
                to={`/statistics/${aStatistics.path}`}
              >
                {aStatistics.caption}
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
