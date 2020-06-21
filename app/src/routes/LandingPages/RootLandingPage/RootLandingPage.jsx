import React from 'react';
import { useHistory } from 'react-router-dom';
import '../LandingPages.css';
import './RootLandingPage.css';

const RootLandingPage = () => {
  const history = useHistory();

  return (
    <div className="frame">
      <h1 className="heading">Smaprat</h1>
      <h2 className="description">Welcome to Smaprat, a documentation for Smalltalk!</h2>
      <button
        type="button"
        key="enterDoku"
        className="enterbutton"
        onClick={() => history.push('/doku')}
      >
        Enter Documentation
      </button>
      <button
        type="button"
        key="enterStatistics"
        className="enterbutton"
        onClick={() => history.push('/statistics')}
      >
        Enter Statistics
      </button>
    </div>
  );
};

export default RootLandingPage;
