import React from 'react';
import { useParams } from 'react-router';
import ClassView from '../../components/ClassView/ClassView';

import HelpView from '../../components/HelpView/HelpView';
import MethodSidebar from '../../components/MethodSidebar/MethodSidebar';
import MethodView from '../../components/MethodView/MethodView';
import './ExplorationView.css';

const ExplorationView = options => {
  const pathParams = useParams();

  const doExploreClass = () => options.mode === 'class';
  const doExploreMethod = () => options.mode === 'method';
  const doExploreBook = () => options.mode === 'help';

  return (
    <div>
      <div>
        {'currentClass' in pathParams ? (
          <MethodSidebar currentClass={pathParams.currentClass} />
        ) : null}
      </div>

      <div className="main">
        {doExploreClass() ? <ClassView currentClass={pathParams.currentClass} /> : null}
      </div>

      <div className="main">
        {doExploreMethod() ? (
          <MethodView
            currentClass={pathParams.currentClass}
            site={pathParams.site}
            currentMethod={pathParams.currentMethod}
          />
        ) : null}
      </div>

      <div className="main">
        {doExploreBook() ? (
          <HelpView bookName={pathParams.currentClass} className="helpBox" />
        ) : null}
      </div>
    </div>
  );
};

export default ExplorationView;
