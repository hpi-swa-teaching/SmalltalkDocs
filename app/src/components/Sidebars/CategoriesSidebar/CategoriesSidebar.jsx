import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../../utils/apiHandler';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import ClassList from './ClassList';

import '../Sidebars.css';

const CategoriesSidebar = props => {
  const { isOpen, toggleIsOpen } = props;

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [categoryIsOpen, setCategoryIsOpen] = useState(true);

  useEffect(() => {
    const simpleFetch = async () => setCategories(await getCategories());
    simpleFetch().then();
  }, []);

  const changeOpenedCategory = aCategoryName => {
    setCurrentCategory(aCategoryName);
    setCategoryIsOpen(true);
  };

  const changeListDetails = aCategoryName =>
    aCategoryName === currentCategory
      ? setCategoryIsOpen(!categoryIsOpen)
      : changeOpenedCategory(aCategoryName);

  return (
    <div id={isOpen ? 'openSidebarBox' : 'closedSidebarBox'} className="sidenav">
      <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
      {isOpen ? (
        <div>
          {/* TODO Extract List of categories in separate component */}
          <p className="secondarySidebarTitle">Categories</p>
          {categories
            ? categories.map(aCategoryName => (
                <li className="categoriesList" key={aCategoryName}>
                  <button
                    className="categoryButton"
                    type="button"
                    onClick={() => changeListDetails(aCategoryName)}
                  >
                    {aCategoryName}
                  </button>
                  {aCategoryName === currentCategory && categoryIsOpen ? (
                    <ClassList categoryName={currentCategory} />
                  ) : null}
                </li>
              ))
            : null}{' '}
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
