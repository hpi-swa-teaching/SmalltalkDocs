import React, { lazy, Suspense, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import CategoriesSidebar from '../../components/Sidebars/CategoriesSidebar/CategoriesSidebar';
import MethodSidebar from '../../components/Sidebars/MethodSidebar/MethodSidebar';
import './ExplorationPage.css';

const ExplorationPage = () => {
  const pathParams = useParams();
  const pathLocation = useLocation();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const toggleSidebarIsOpen = () => setSidebarIsOpen(!sidebarIsOpen);

  const LandingPage = lazy(() =>
    import('../../components/ExplorationViews/ExplorationLandingView/ExplorationLandingView')
  );
  const ClassView = lazy(() => import('../../components/ExplorationViews/ClassView/ClassView'));
  const HelpView = lazy(() => import('../../components/ExplorationViews/HelpView/HelpView'));
  const MethodView = lazy(() => import('../../components/ExplorationViews/MethodView/MethodView'));

  // TODO: move it to an exporationMapper.jsx
  // TODO: write tests for matchers
  // TODO: decide, should it be part of the pathMappers?
  const isLandingPath = () => /^\/doku$/.test(pathLocation.pathname);
  const isHelpBookPath = () =>
    /^\/doku\/help\//.test(pathLocation.pathname) && pathParams.currentClass != null;
  const isClassRootPath = () =>
    /^\/doku\/classes\/\w*$/.test(pathLocation.pathname) && pathParams.currentClass != null;
  const isMethodPath = () =>
    /^\/doku\/classes\/\S*\/methods\/(instance|class)\//.test(pathLocation.pathname) &&
    pathParams.currentClass != null &&
    pathParams.currentMethod != null &&
    pathParams.site != null;

  const viewsMapping = [
    () =>
      isLandingPath() ? (
        <Suspense fallback={<LoadingIndicator />}>
          <LandingPage />
        </Suspense>
      ) : null,
    () =>
      isHelpBookPath() ? (
        <Suspense fallback={<LoadingIndicator />}>
          <HelpView bookName={pathParams.currentClass} className="helpBox" />
        </Suspense>
      ) : null,
    () =>
      isClassRootPath() ? (
        <Suspense fallback={<LoadingIndicator />}>
          <ClassView currentClass={pathParams.currentClass} />
        </Suspense>
      ) : null,
    () =>
      isMethodPath() ? (
        <Suspense fallback={<LoadingIndicator />}>
          <MethodView
            currentClass={pathParams.currentClass}
            site={pathParams.site}
            currentMethod={pathParams.currentMethod}
          />
        </Suspense>
      ) : null
  ];

  const sidebarsMapping = [
    () =>
      isLandingPath() ? (
        <CategoriesSidebar isOpen={sidebarIsOpen} toggleIsOpen={toggleSidebarIsOpen} />
      ) : null,
    () =>
      isMethodPath() || isClassRootPath() ? (
        <MethodSidebar
          currentClass={pathParams.currentClass}
          isOpen={sidebarIsOpen}
          toggleIsOpen={toggleSidebarIsOpen}
        />
      ) : null
  ];

  const getExplorationViewByPath = () =>
    viewsMapping
      .map(matcher => matcher())
      .filter(matcherResult => matcherResult !== null)
      .reduce((melt, currentComponent) =>
        melt === null ? (
          currentComponent
        ) : (
          <>
            {melt}
            {currentComponent}
          </>
        )
      );

  const getSidebarByPath = () =>
    sidebarsMapping
      .map(matcher => matcher())
      .filter(matcherResult => matcherResult !== null)
      .reduce((melt, currentComponent) =>
        melt === null ? (
          currentComponent
        ) : (
          <>
            {melt} | {currentComponent}
          </>
        )
      );

  return (
    <div>
      <div>{getSidebarByPath()}</div>
      <div id={sidebarIsOpen ? 'openedSidebar' : 'closedSidebar'} className="main">
        {getExplorationViewByPath(pathLocation, pathParams)}
      </div>
    </div>
  );
};

export default ExplorationPage;
