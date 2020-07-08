import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const NotFound = lazy(() => import('../NotFound/NotFound'));
const RootLandingPage = lazy(() => import('../LandingPages/RootLandingPage/RootLandingPage'));
const StatisticsView = lazy(() => import('../StatisticsView/StatisticsView'));
// TODO: merge DokuLandingPage & ExplorationView like Statistics pages schema
const DokuLandingPage = lazy(() => import('../LandingPages/DokuLandingPage/DokuLandingPage'));
const ExplorationView = lazy(() => import('../ExplorationView/ExplorationView'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={RootLandingPage} />
        <Route exact path="/doku" component={DokuLandingPage} />
        <Route exact path="/statistics" component={StatisticsView} />
        <Route exact path="/statistics/:currentMetric" component={StatisticsView} />
        <Route
          exact
          path="/doku/help/:currentClass"
          render={props => <ExplorationView {...props} mode="help" />}
        />
        <Route
          exact
          path="/doku/classes/:currentClass"
          render={props => <ExplorationView {...props} mode="class" />}
        />
        <Route
          exact
          path="/doku/classes/:currentClass/methods/:site/:currentMethod"
          render={props => <ExplorationView {...props} mode="method" />}
        />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
