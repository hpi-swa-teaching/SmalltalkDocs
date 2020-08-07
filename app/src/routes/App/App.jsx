import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  getClassDocumentationURLBluePrint,
  getMethodDocumentationURLBluePrint,
  getPathToDokuRoot,
  getPathToRoot,
  getPathToStatisticsRoot,
  getSpecificMetricsURLBluePrint
} from '../../utils/pathMapper';

const NotFound = lazy(() => import('../NotFound/NotFound'));
const RootLandingPage = lazy(() => import('../RootLandingPage/RootLandingPage'));
const StatisticsView = lazy(() => import('../MetricsPage/MetricsPage'));
const ExplorationView = lazy(() => import('../ExplorationPage/ExplorationPage'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={getPathToRoot()} component={RootLandingPage} />
        <Route exact path={getPathToStatisticsRoot()} component={StatisticsView} />
        <Route exact path={getSpecificMetricsURLBluePrint()} component={StatisticsView} />
        <Route exact path={getPathToDokuRoot()} component={ExplorationView} />
        <Route exact path={getClassDocumentationURLBluePrint()} component={ExplorationView} />
        <Route exact path={getMethodDocumentationURLBluePrint()} component={ExplorationView} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
