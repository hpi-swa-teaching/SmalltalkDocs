import React from 'react';
import CategoriesSidebar from '../../components/CategoriesSidebar/CategoriesSidebar';
import './LandingPage.css';

const LandingPage = () => (
  <div id="bigBox">
    <div>
        {/*<h1>Smaprat</h1>*/}
      <CategoriesSidebar />
    </div>
    {/* TODO: entry point for issue 30 */}
    <div className="classBox">
      <h1 id="heading">Welcome to Smaprat!</h1>
      <p id="description">Start by selecting a class from the list on the left :)</p>
    </div>
  </div>
);

export default LandingPage;
