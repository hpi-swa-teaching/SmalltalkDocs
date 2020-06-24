import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import ClassView from '../../components/ClassView/ClassView';
import HelpView from '../../components/HelpView/HelpView';
import MethodView from '../../components/MethodView/MethodView';
import MethodSidebar from '../../components/Sidebars/MethodSidebar/MethodSidebar';
import './ExplorationView.css';

const ExplorationView = props => {
  const { mode } = props;

  const pathParams = useParams();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const toggleSidebarIsOpen = () => setSidebarIsOpen(!sidebarIsOpen);

  const doExploreClass = () => mode === 'class';
  const doExploreMethod = () => mode === 'method';
  const doExploreBook = () => mode === 'help';

  return (
    <div>
      <div>
        {'currentClass' in pathParams ? (
          <MethodSidebar
            currentClass={pathParams.currentClass}
            isOpen={sidebarIsOpen}
            toggleIsOpen={toggleSidebarIsOpen}
          />
        ) : null}
      </div>
      <div id={sidebarIsOpen ? 'openedSidebar' : 'closedSidebar'} className="main">
        <div>{doExploreClass() ? <ClassView currentClass={pathParams.currentClass} /> : null}</div>
        <div>
          {doExploreMethod() ? (
            <MethodView
              currentClass={pathParams.currentClass}
              site={pathParams.site}
              currentMethod={pathParams.currentMethod}
            />
          ) : null}
        </div>
        <div>
          {doExploreBook() ? (
            <HelpView bookName={pathParams.currentClass} className="helpBox" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

ExplorationView.propTypes = {
  mode: PropTypes.string.isRequired
};

export default ExplorationView;
