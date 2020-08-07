import React, { lazy, Suspense } from 'react';
import {
  isClassRootPath,
  isHelpBookPath,
  isLandingPath,
  isMethodPath
} from '../PathHandling/dokuPathMatcher';
import { classKey, methodKey, methodSideKey } from '../PathHandling/pathMapper';

// base component are small enough to load immediately
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

const CategoriesSidebar = lazy(() =>
  import('../../components/Sidebars/CategoriesSidebar/CategoriesSidebar')
);
const MethodSidebar = lazy(() => import('../../components/Sidebars/MethodSidebar/MethodSidebar'));

const LandingPage = lazy(() =>
  import('../../components/ExplorationViews/ExplorationLandingView/ExplorationLandingView')
);
const ClassView = lazy(() => import('../../components/ExplorationViews/ClassView/ClassView'));
const HelpView = lazy(() => import('../../components/ExplorationViews/HelpView/HelpView'));
const MethodView = lazy(() => import('../../components/ExplorationViews/MethodView/MethodView'));

/*
The name key only exists to satisfy the requirements of the map function from React.
 */

export const getExplorationViewByPath = (locationObj, paramsObj) =>
  [
    {
      name: 'LandingPage',
      decisionFunction: isLandingPath,
      component: (
        <Suspense fallback={<LoadingIndicator />}>
          <LandingPage />
        </Suspense>
      )
    },
    {
      name: 'HelpView',
      decisionFunction: isHelpBookPath,
      component: (
        <Suspense fallback={<LoadingIndicator />}>
          <HelpView bookName={paramsObj[classKey()]} className="helpBox" />
        </Suspense>
      )
    },
    {
      name: 'ClassView',
      decisionFunction: isClassRootPath,
      component: (
        <Suspense fallback={<LoadingIndicator />}>
          <ClassView currentClass={paramsObj[classKey()]} />
        </Suspense>
      )
    },
    {
      name: 'MethodView',
      decisionFunction: isMethodPath,
      component: (
        <Suspense fallback={<LoadingIndicator />}>
          <MethodView
            currentClass={paramsObj[classKey()]}
            site={paramsObj[methodSideKey()]}
            currentMethod={paramsObj[methodKey()]}
          />
        </Suspense>
      )
    }
  ]
    .filter(aViewObj => aViewObj.decisionFunction(locationObj, paramsObj))
    .map(aViewObj => <div key={aViewObj.name}>{aViewObj.component}</div>);

const shouldShowMethodSidebar = (locationObj, paramsObj) =>
  isMethodPath(locationObj, paramsObj) || isClassRootPath(locationObj, paramsObj);

export const getSidebarByPath = (locationObj, paramsObj, sizeState, sizeController) =>
  [
    {
      name: 'CategoriesSidebar',
      decisionFunction: isLandingPath,
      component: (
        <Suspense fallback={<LoadingIndicator />}>
          <CategoriesSidebar isOpen={sizeState} toggleIsOpen={sizeController} />
        </Suspense>
      )
    },
    {
      name: 'MethodSidebar',
      decisionFunction: shouldShowMethodSidebar,
      component: (
        <Suspense fallback={<LoadingIndicator />}>
          <MethodSidebar
            currentClass={paramsObj[classKey()]}
            isOpen={sizeState}
            toggleIsOpen={sizeController}
          />
        </Suspense>
      )
    }
  ]
    .filter(aSidebarObj => aSidebarObj.decisionFunction(locationObj, paramsObj))
    .map(aSidebarObj => <div key={aSidebarObj.name}>{aSidebarObj.component}</div>);
