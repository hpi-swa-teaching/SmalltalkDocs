import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../../utils/BackendHandling/apiHandler';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import CategoriesList from './CategoriesList';

import '../Sidebars.css';

const CategoriesSidebar = props => {
  const { isOpen, toggleIsOpen } = props;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const simpleFetch = async () => setCategories(await getCategories());
    simpleFetch().then();
  }, []);

  return (
    <div id={isOpen ? 'openSidebarBox' : 'closedSidebarBox'} className="sidenav">
      <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
      {isOpen ? (
        <div>
          <p className="secondarySidebarTitle">Categories</p>
          <CategoriesList categories={categories} />
        </div>
      ) : null}
    </div>
  );
};

CategoriesSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired
};

export default CategoriesSidebar;
