import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/apiHandler';
import ClassList from './ClassList';
import SidebarHeader from '../Header/SidebarHeader';
import ClosedSidebarHeader from '../Header/ClosedSidebarHeader';
import './CategoriesSidebar.css';
import backButtonPic from "../../ressources/images/barClose.png";

const CategoriesSidebar = options => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const simpleFetch = async () => setCategories(await getCategories());
    simpleFetch().then();
  }, []);

  function setBarState(open) {
      if(open){
          document.getElementById("SideBox").style.width = "417px";
          document.getElementById("OpenBox").style.width = "0px";
          options.setBar(true);
      }
      else{
          document.getElementById("SideBox").style.width = "0px";
          document.getElementById("OpenBox").style.width = "50px";
          options.setBar(false);
      }
  }

  return (
    <div>
        <div id="SideBox" className="sidenav">
          <SidebarHeader closeFunction={setBarState.bind(this)}/>

          <p className="sidebarHeading2">Categories</p>

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
        <ClosedSidebarHeader closeFunction={setBarState.bind(this)}/>
    </div>
  );
};

export default CategoriesSidebar;
