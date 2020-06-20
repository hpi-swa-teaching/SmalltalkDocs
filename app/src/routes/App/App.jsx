import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const DokuLandingPage = lazy(() => import('../DokuLandingPage/DokuLandingPage'));
const LandingPage = lazy(() => import('../LandingPage/LandingPage'));
const ExplorationView = lazy(() => import('../ExplorationView/ExplorationView'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" render={LandingPage} />
        <Route exact path="/doku" render={DokuLandingPage} />
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
        <Route render={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
