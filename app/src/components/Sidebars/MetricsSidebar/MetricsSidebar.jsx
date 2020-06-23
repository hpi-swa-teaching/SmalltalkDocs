import React from 'react';
import PropTypes from 'prop-types';
import SidebarHeader from '../Headers/SidebarHeader';

import '../Sidebars.css';

const MetricsSidebar = props => {
  const { isOpen, toggleIsOpen } = props;
  return (
    <div id={isOpen ? 'openSidebarBox' : 'closedSidebarBox'} className="sidenav">
      <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
      {isOpen ? <p className="secondarySidebarTitle">Metrics</p> : null}
    </div>
  );
};

MetricsSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired
};

export default MetricsSidebar;
