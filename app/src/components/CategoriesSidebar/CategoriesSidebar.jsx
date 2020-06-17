import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/apiHandler';
import ClassList from './ClassList';
import SidebarHeader from '../Header/SidebarHeader';
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
    <div className="sidenav">
      <SidebarHeader />

      <p className="sidebarHeading2">Class List</p>

      {categories.map(aCategoryName => (
        <li className="categorylist">
          <button
            className="categorybuttons"
            type="button"
            key={aCategoryName}
            onClick={() => {
              if (!isOpen) {
                setCurrentCategory(aCategoryName);
                setOpen(true);
              } else if (currentCategory === aCategoryName) {
                setCurrentCategory(null);
                setOpen(false);
              } else {
                setCurrentCategory(aCategoryName);
              }
            }}
          >
            {aCategoryName}
          </button>
          {aCategoryName === currentCategory ? <ClassList categoryName={currentCategory} /> : null}
        </li>
      ))}
    </div>
  );
};

export default CategoriesSidebar;
