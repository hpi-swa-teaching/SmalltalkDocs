import React from 'react';
import CategoriesSidebar from '../../../components/CategoriesSidebar/CategoriesSidebar';
import '../LandingPages.css';
import './DokuLandingPage.css';

const DokuLandingPage = () => (
  <div className="bigBox">
    <div>
      <CategoriesSidebar />
    </div>
    <div className="main">
      <h1>Welcome to Smaprat!</h1>
      <h2 id="description">Start by selecting a class from the list on the left :)</h2>
    </div>
  </div>
);

export default DokuLandingPage;
