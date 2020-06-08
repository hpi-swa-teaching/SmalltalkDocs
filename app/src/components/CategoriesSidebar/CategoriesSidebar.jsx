import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/apiHandler';
import ClassList from './ClassList';

import './CategoriesSidebar.css';

const CategoriesSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    const simpleFetch = async () => setCategories(await getCategories());
    simpleFetch().then();
  }, []);

  return (
  <div>
    <ul id="box">
      <img id={"logo"}/>
      <p id={"sidebarHeading"}>Smaprat</p>
      <div id="buttonBack">
        <button id="closeButton"></button>
      </div>
      <p id={"sidebarHeading2"}>Class List</p>
      {categories.map(aCategoryName => (
        <li>
          <button id="listbuttons"
            type="button"
            key={aCategoryName}
            onClick={() => setCurrentCategory(aCategoryName)}
          >
            {aCategoryName}
          </button >
          {aCategoryName === currentCategory ? <ClassList categoryName={currentCategory} /> : null}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default CategoriesSidebar;
