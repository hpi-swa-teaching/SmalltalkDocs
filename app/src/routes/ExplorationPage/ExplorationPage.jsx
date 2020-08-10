import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import {
  getExplorationViewByPath,
  getSidebarByPath
} from '../../utils/ViewMappers/explorationMapper';

import './ExplorationPage.css';

const ExplorationPage = () => {
  const pathParams = useParams();
  const pathLocation = useLocation();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const toggleSidebarIsOpen = () => setSidebarIsOpen(!sidebarIsOpen);

  return (
    <div>
      <div>{getSidebarByPath(pathLocation, pathParams, sidebarIsOpen, toggleSidebarIsOpen)}</div>
      <div id={sidebarIsOpen ? 'openedSidebar' : 'closedSidebar'} className="main">
        {getExplorationViewByPath(pathLocation, pathParams)}
      </div>
    </div>
  );
};

export default ExplorationPage;
