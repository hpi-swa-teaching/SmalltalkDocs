import React from 'react';
import { useParams } from 'react-router';
import ClassView from '../../components/ClassView/ClassView';

import HelpView from '../../components/HelpView/HelpView';
import MethodSidebar from '../../components/MethodSidebar/MethodSidebar';
import MethodView from '../../components/MethodView/MethodView';
import './ExplorationView.css';

const ExplorationView = () => {
  const pathParams = useParams();

  // TODO: improve path distinction
  // TODO: refactor property names to symbols
  const doExploreClass = () => 'currentClass' in pathParams && !('currentMethod' in pathParams);
  const doExploreMethod = () => 'currentClass' in pathParams && 'currentMethod' in pathParams;
  const doExploreBook = () => 'bookName' in pathParams;

  return (
    <div>


      <div>
        {'currentClass' in pathParams ? (
            <MethodSidebar currentClass={pathParams.currentClass} />
        ) : null}
      </div>

      <div className={"main"}>
        {doExploreClass() ? (
            <ClassView  currentClass={pathParams.currentClass} />
        ) : null}
      </div>

      <div className={"main"}>
      {doExploreMethod() ? (
          <MethodView
              currentClass={pathParams.currentClass}
              site={pathParams.site}
              currentMethod={pathParams.currentMethod}
          />
      ) : null}
      </div>

      <div className={"main"}>
        {doExploreBook() ? <HelpView bookName={pathParams.bookName} className="helpBox" /> : null}
      </div>

    </div>
  );
};

export default ExplorationView;
