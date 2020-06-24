import React, { useState } from 'react';
import NavLink from 'react-router-dom/NavLink';
import { searchForCategory, searchForClass } from '../../utils/apiHandler';
import './SearchExplorer.css';

const SearchExplorer = () => {
  const [currentSearchText, setCurrentSearchText] = useState('');
  const [currentResult, setCurrentResult] = useState([]);
  const [shouldSearchClass, setShouldSearchClass] = useState(true);
  const [shouldSearchCategory, setShouldSearchCategory] = useState(true);

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          setCurrentResult(
            []
              .concat(
                shouldSearchCategory ? searchForCategory(currentSearchText) : [],
                shouldSearchClass ? searchForClass(currentSearchText) : []
              )
              .sort()
          );
        }}
      >
        <input
          type="text"
          onChange={event => setCurrentSearchText(event.target.value)}
          value={currentSearchText}
        />
        <label htmlFor="classSearchCheck">
          Search for classes
          <input
            id="classSearchCheck"
            name="classSearch"
            type="checkbox"
            checked={shouldSearchClass}
            onChange={() => setShouldSearchClass(!shouldSearchClass)}
          />
        </label>
        <label htmlFor="categorySearchCheck">
          Search for categories
          <input
            id="categorySearchCheck"
            name="categorySearch"
            type="checkbox"
            checked={shouldSearchCategory}
            onChange={() => setShouldSearchCategory(!shouldSearchCategory)}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
      <div>
        <ul>
          {currentResult.map(result => (
            <ul key={result}>
              <NavLink to="/">{result}</NavLink>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchExplorer;
