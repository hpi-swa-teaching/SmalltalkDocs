import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/apiHandler';
import ClassList from './ClassList';

import './CategoriesSidebar.css';

const CategoriesSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const simpleFetch = async () => setCategories(await getCategories());
    simpleFetch().then();
  }, []);

  return (
    <div>
      <ul className="sidebarBox">
        <img alt="Smaprat Logo" className="logo" />
        <p className="sidebarHeading">Smaprat</p>
        <div className="buttonBack">
          <button className="closeButton" type="button" />
        </div>
        <p className="sidebarHeading2">Class List</p>
        {categories.map(aCategoryName => (
          <li>
            <button
              className="categorybuttons"
              type="button"
              key={aCategoryName}
              onClick={() => {
                if (!isOpen) {
                  setCurrentCategory(aCategoryName);
                  setOpen(true);
                } else {
                  setCurrentCategory(null);
                  setOpen(false);
                }
              }}
            >
              {aCategoryName}
            </button>
            {aCategoryName === currentCategory ? (
              <ClassList categoryName={currentCategory} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;
