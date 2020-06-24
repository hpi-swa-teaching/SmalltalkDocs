import React, { useState } from 'react';
import CategoriesSidebar from '../../../components/Sidebars/CategoriesSidebar/CategoriesSidebar';

import '../LandingPages.css';

const DokuLandingPage = () => {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const toggleIsSideOpen = () => setIsSideOpen(!isSideOpen);

  return (
    <div className="bigBox">
      <CategoriesSidebar isOpen={isSideOpen} toggleIsOpen={toggleIsSideOpen} />
      <div id={isSideOpen ? 'openedSidebar' : 'closedSidebar'} className="main">
        <h1>Welcome to Smaprat!</h1>
        <h2 id="description">Start by selecting a class from the list on the left :)</h2>
      </div>
    </div>
  );
};

export default DokuLandingPage;
