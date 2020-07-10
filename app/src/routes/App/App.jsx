import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const NotFound = lazy(() => import('../NotFound/NotFound'));
const RootLandingPage = lazy(() => import('../RootLandingPage/RootLandingPage'));
const StatisticsView = lazy(() => import('../StatisticsPage/StatisticsPage'));
const ExplorationView = lazy(() => import('../ExplorationPage/ExplorationPage'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={RootLandingPage} />
        <Route exact path="/statistics" component={StatisticsView} />
        <Route exact path="/statistics/:currentMetric" component={StatisticsView} />
        <Route exact path="/doku" component={ExplorationView} />
        <Route exact path="/doku/classes/:currentClass" component={ExplorationView} />
        <Route
          exact
          path="/doku/classes/:currentClass/methods/:site/:currentMethod"
          component={ExplorationView}
        />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
