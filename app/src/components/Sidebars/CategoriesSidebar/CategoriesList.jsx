import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassList from './ClassList';
import './CategoriesList.css';

const CategoriesList = props => {
  const { categories } = props;

  const [currentCategory, setCurrentCategory] = useState('');
  const [categoryIsOpen, setCategoryIsOpen] = useState(true);

  const changeOpenedCategory = aCategoryName => {
    setCurrentCategory(aCategoryName);
    setCategoryIsOpen(true);
  };

  const changeListDetails = aCategoryName =>
    aCategoryName === currentCategory
      ? setCategoryIsOpen(!categoryIsOpen)
      : changeOpenedCategory(aCategoryName);

  return categories
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
    : null;
};

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CategoriesList;
