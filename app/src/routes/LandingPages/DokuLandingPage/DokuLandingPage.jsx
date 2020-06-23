import React from 'react';
import CategoriesSidebar from '../../../components/Sidebars/CategoriesSidebar/CategoriesSidebar';
import '../LandingPages.css';
import './DokuLandingPage.css';

const DokuLandingPage = () => {
  function setBarVisibility(isVisible) {
    if (isVisible) {
      document.getElementById('main').style.marginLeft = '417px';
    } else {
      document.getElementById('main').style.marginLeft = '50px';
    }
  }

  return (
    <div className="bigBox">
      <div>
        <CategoriesSidebar setBar={setBarVisibility.bind(this)} />
      </div>
      <div id="main" className="main">
        <h1>Welcome to Smaprat!</h1>

        <h2 id="description">Start by selecting a class from the list on the left :)</h2>
      </div>
    </div>
  );
};

export default DokuLandingPage;
