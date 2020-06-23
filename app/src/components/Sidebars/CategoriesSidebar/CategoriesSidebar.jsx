import React, { useEffect, useState } from 'react';
import { getCategories } from '../../../utils/apiHandler';
import ClassList from './ClassList';
import './CategoriesSidebar.css';
import '../Sidebars.css';

const CategoriesSidebar = options => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const simpleFetch = async () => setCategories(await getCategories());
    simpleFetch().then();
  }, []);

  function setBarState(open) {
    if (open) {
      document.getElementById('SideBox').style.width = '417px';
      document.getElementById('OpenBox').style.width = '0px';
      options.setBar(true);
    } else {
      document.getElementById('SideBox').style.width = '0px';
      document.getElementById('OpenBox').style.width = '50px';
      options.setBar(false);
    }
  }

  return (
    <div>
      <div id="SideBox" className="sidenav">

        <p className="secondarySidebarTitle">Categories</p>

        {categories
          ? categories.map(aCategoryName => (
              <li className="categorylist" key={aCategoryName}>
                <button
                  className="categorybuttons"
                  type="button"
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
                {aCategoryName === currentCategory ? (
                  <ClassList categoryName={currentCategory} />
                ) : null}
              </li>
            ))
          : null}
      </div>
    </div>
  );
};

export default CategoriesSidebar;
