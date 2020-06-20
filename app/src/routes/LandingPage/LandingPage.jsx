import React from 'react';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
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
        Enter Doku
      </button>
    </div>
  );
};

export default LandingPage;
