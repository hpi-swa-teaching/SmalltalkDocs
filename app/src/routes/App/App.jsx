import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// TODO: search for eslint warning in documentation
const LandingPage = lazy(() => import('../LandingPage/LandingPage'));
const ExplorationView = lazy(() => import('../ExplorationView/ExplorationView'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/help/bookName" component={ExplorationView} />
        <Route exact path="/classes/:currentClass" component={ExplorationView} />
        <Route
          exact
          path="/classes/:currentClass/methods/:site/:currentMethod"
          component={ExplorationView}
        />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
