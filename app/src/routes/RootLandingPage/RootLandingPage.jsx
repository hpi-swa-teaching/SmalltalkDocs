import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchExplorer from '../../components/SearchExplorer/SearchExplorer';
import '../LandingPages/LandingPages.css';
import './RootLandingPage.css';

const RootLandingPage = () => {
  const history = useHistory();

  return (
    <div className="frame">
      <h1 className="heading">Småprat</h1>
      <h2 className="description">Welcome to Småprat, a documentation for Smalltalk!</h2>
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
      <SearchExplorer />
    </div>
  );
};

export default RootLandingPage;
