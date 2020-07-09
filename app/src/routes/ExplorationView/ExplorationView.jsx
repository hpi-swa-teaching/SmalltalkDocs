import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import MethodSidebar from '../../components/Sidebars/MethodSidebar/MethodSidebar';
import getExplorationViewByPath from '../../utils/explorerMapper';
import './ExplorationView.css';

const ExplorationView = () => {
  const pathParams = useParams();
  const pathLocation = useLocation();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const toggleSidebarIsOpen = () => setSidebarIsOpen(!sidebarIsOpen);

  return (
    <div>
      <div>
        {/* TODO: map right sidebar to component */}
        {'currentClass' in pathParams ? (
          <MethodSidebar
            currentClass={pathParams.currentClass}
            isOpen={sidebarIsOpen}
            toggleIsOpen={toggleSidebarIsOpen}
          />
        ) : null}
      </div>
      <div id={sidebarIsOpen ? 'openedSidebar' : 'closedSidebar'} className="main">
        {getExplorationViewByPath(pathLocation, pathParams)}
      </div>
    </div>
  );
};

export default ExplorationView;
