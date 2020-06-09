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
    <ul class="sidebarBox">
      <img class={"logo"}/>
      <p class={"sidebarHeading"}>Smaprat</p>
      <div class="buttonBack">
        <button class="closeButton"></button>
      </div>
      <p class={"sidebarHeading2"}>Class List</p>
      {categories.map(aCategoryName => (
        <li>
          <button class="categorybuttons"
            type="button"
            key={aCategoryName}
            onClick={() => {
              if(!isOpen){
                setCurrentCategory(aCategoryName);
                setOpen(true);
              }
              else{
                setCurrentCategory(null);
                setOpen(false);
              }
            }}
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
