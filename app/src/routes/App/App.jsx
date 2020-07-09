import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const NotFound = lazy(() => import('../NotFound/NotFound').default);
const RootLandingPage = lazy(() => import('../RootLandingPage/RootLandingPage').default);
const StatisticsView = lazy(() => import('../StatisticsView/StatisticsView').default);
const ExplorationView = lazy(() => import('../ExplorationView/ExplorationView').default);

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={RootLandingPage} />
        <Route exact path="/statistics" component={StatisticsView} />
        <Route exact path="/statistics/:currentMetric" component={StatisticsView} />
        <Route exact path="/doku" component={ExplorationView} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
