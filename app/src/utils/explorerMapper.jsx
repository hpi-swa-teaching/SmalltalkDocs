import React, { lazy, Suspense } from 'react';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';

const LandingPage = lazy(
  () =>
    import('../components/ExplorationViews/ExplorationLandingView/ExplorationLandingView').default
);
const ClassView = lazy(() => import('../components/ExplorationViews/ClassView/ClassView').default);
const HelpView = lazy(() => import('../components/ExplorationViews/HelpView/HelpView').default);
const MethodView = lazy(
  () => import('../components/ExplorationViews/MethodView/MethodView').default
);

const explorerMatchers = [
  // is landing page?
  // eslint-disable-next-line no-unused-vars
  (location, params) =>
    /^\/doku$/.test(location) ? (
      <Suspense fallback={<LoadingIndicator />}>
        <LandingPage />{' '}
      </Suspense>
    ) : null,
  // is help book mode?
  (location, params) =>
    /^\/doku\/help\//.test(location) && params.currentClass != null ? (
      <Suspense fallback={<LoadingIndicator />}>
        <HelpView bookName={params.currentClass} className="helpBox" />
      </Suspense>
    ) : null,
  // is class mode?
  (location, params) =>
    /^\/doku\/classes\//.test(location) && params.currentClass != null ? (
      <Suspense fallback={<LoadingIndicator />}>
        {' '}
        <ClassView currentClass={params.currentClass} />
      </Suspense>
    ) : null,
  // is method mode?
  (location, params) =>
    /^\/doku\/classes\/\S*\/methods\/(instance|class)\//.test(location) &&
    params.currentClass != null &&
    params.currentMethod != null &&
    params.site != null ? (
      <Suspense fallback={<LoadingIndicator />}>
        <MethodView
          currentClass={params.currentClass}
          site={params.site}
          currentMethod={params.currentMethod}
        />
      </Suspense>
    ) : null
];

const getExplorationViewByPath = (location, params) =>
  explorerMatchers
    .map(matcher => matcher(location, params))
    .filter(matcherResult => matcherResult !== null)
    .map(component => <div>{component}</div>);

export default getExplorationViewByPath;
