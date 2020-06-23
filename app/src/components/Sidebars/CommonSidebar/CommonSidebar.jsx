import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CommonSidebar = props => {
  const { sidebarType } = props;

  const [isOpen, setIsOpen] = useState(true);

  const toogleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {

  }, [isOpen]);

  const getRightSidebar = () => {
    switch (sidebarType) {
      case 'metrics':
        return <div />;
      case 'categories':
        return <di />;
      case 'methods':
        return <div />;
      default:
        return <div />;
    }
  };
  return <div>{getRightSidebar()}</div>;
};

CommonSidebar.propTypes = {
  sidebarType: PropTypes.string.isRequired
};

export default CommonSidebar;
