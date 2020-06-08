import React from 'react';
import { useParams } from 'react-router';
import ClassView from '../../components/ClassView/ClassView';
import Header from '../../components/Header/Header';
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
      <Header />
      {'currentClass' in pathParams ? (
        <MethodSidebar currentClass={pathParams.currentClass} />
      ) : null}
      {doExploreClass() ? (
        <ClassView className="classBox" currentClass={pathParams.currentClass} />
      ) : null}
      {doExploreMethod() ? (
        <MethodView
          currentClass={pathParams.currentClass}
          site={pathParams.site}
          currentMethod={pathParams.currentMethod}
        />
      ) : null}
      {doExploreBook() ? <HelpView bookName={pathParams.bookName} className="helpBox" /> : null}
    </div>
  );
};

export default ExplorationView;
