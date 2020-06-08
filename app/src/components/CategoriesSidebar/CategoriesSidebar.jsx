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
    <ul>
      {categories.map(aCategoryName => (
        <li>
          <button
            type="button"
            key={aCategoryName}
            onClick={() => setCurrentCategory(aCategoryName)}
          >
            {aCategoryName}
          </button>
          {aCategoryName === currentCategory ? <ClassList categoryName={currentCategory} /> : null}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesSidebar;
