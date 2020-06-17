import React from 'react';
import CategoriesSidebar from '../../components/CategoriesSidebar/CategoriesSidebar';
import './LandingPage.css';

const LandingPage = () => (
  <div className="bigBox">
    <div>
      {/* <h1>Smaprat</h1> */}
      <CategoriesSidebar />
    </div>
    {/* TODO: entry point for issue 30 */}
    <div className="main">
      <h1>Welcome to Smaprat!</h1>
      <h2 id="description">Start by selecting a class from the list on the left :)</h2>
    </div>
  </div>
);

export default LandingPage;
