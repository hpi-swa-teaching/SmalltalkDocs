import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  getClassDocumentationURLBluePrint,
  getMethodDocumentationURLBluePrint,
  getPathToDokuRoot,
  getPathToRoot,
  getPathToMetricsRoot,
  getSpecificMetricsURLBluePrint
} from '../../utils/PathHandling/pathMapper';

import './App.css';

const NotFound = lazy(() => import('../NotFound/NotFound'));
const RootLandingPage = lazy(() => import('../RootLandingPage/RootLandingPage'));
const MetricsView = lazy(() => import('../MetricsPage/MetricsPage'));
const ExplorationView = lazy(() => import('../ExplorationPage/ExplorationPage'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={getPathToRoot()} component={RootLandingPage} />
        <Route exact path={getPathToMetricsRoot()} component={MetricsView} />
        <Route exact path={getSpecificMetricsURLBluePrint()} component={MetricsView} />
        <Route exact path={getPathToDokuRoot()} component={ExplorationView} />
        <Route exact path={getClassDocumentationURLBluePrint()} component={ExplorationView} />
        <Route exact path={getMethodDocumentationURLBluePrint()} component={ExplorationView} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
