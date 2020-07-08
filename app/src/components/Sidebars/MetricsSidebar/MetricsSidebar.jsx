import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getStatisticsNavigationMapping } from '../../../utils/statisticsMapper';
import SidebarHeader from '../SidebarHeader/SidebarHeader';

import '../Sidebars.css';

const MetricsSidebar = props => {
  const { isOpen, toggleIsOpen } = props;
  return (
    <div id={isOpen ? 'openSidebarBox' : 'closedSidebarBox'} className="sidenav">
      <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
      {isOpen ? <p className="secondarySidebarTitle">Metrics</p> : null}
      {/* TODO: Style elements */}
      <ul>
        {getStatisticsNavigationMapping().map(aStatistics => (
          <li key={`${aStatistics.caption}`}>
            <NavLink to={`/statistics/${aStatistics.path}`}>{aStatistics.caption}</NavLink>
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
