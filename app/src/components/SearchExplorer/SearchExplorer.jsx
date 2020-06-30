import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { searchForClasses, searchForMethods } from '../../utils/apiHandler';
import './SearchExplorer.css';

const SearchExplorer = () => {
  const history = useHistory();

  const [currentSearchText, setCurrentSearchText] = useState('');
  const [loadingSearchResults, setloadingSearchResults] = useState(false);
  const [currentResult, setCurrentResult] = useState([]);
  const [shouldSearchClasses, setShouldSearchClass] = useState(true);
  const [shouldSearchMethods, setShouldSearchMethod] = useState(true);

  const fetchResults = async event => {
    event.preventDefault();
    if (currentSearchText.length <= 0) {
      setCurrentResult(<li>Nothing found due to empty search string!</li>);
      return;
    }
    setloadingSearchResults(true);
    // const fetchedClasses = shouldSearchClasses
    //   ? (await searchForClasses(currentSearchText)).sort()
    //   : [];
    // const fetchedMethods = shouldSearchMethods
    //   ? (await searchForMethods(currentSearchText)).sort()
    //   : [];
    const fetchedClasses = (await searchForClasses(currentSearchText)).sort();
    const fetchedMethods = (await searchForMethods(currentSearchText)).sort();

    setCurrentResult(
      [].concat(
        fetchedClasses.map(aclass => (
          <li key={aclass}>
            <button type="button" onClick={() => history.push(`/doku/classes/${aclass}`)}>
              {aclass}
            </button>
          </li>
        )),
        fetchedMethods.map(method => (
          <li key={`${method.className}-${method.side}-${method.methodName}`}>
            <button
              type="button"
              onClick={() =>
                history.push(
                  `/doku/classes/${method.className}/methods/${method.side}/${method.methodName}`
                )
              }
            >{`${method.className} ${method.methodName}`}</button>
          </li>
        ))
      )
    );
    setloadingSearchResults(false);
  };

  return (
    <div>
      <form onSubmit={event => fetchResults(event)}>
        <input
          type="text"
          id="searchInput"
          onChange={event => setCurrentSearchText(event.target.value)}
          placeholder="Search term with % as wildcard"
          size="30"
          value={currentSearchText}
        />
        <label htmlFor="classSearchCheck">
          <input
            id="classSearchCheck"
            name="classSearch"
            type="checkbox"
            checked={shouldSearchClasses}
            onChange={() => setShouldSearchClass(!shouldSearchClasses)}
          />
          Search for classes
        </label>
        <label htmlFor="methodSearchCheck">
          <input
            id="methodSearchCheck"
            name="methodSearch"
            type="checkbox"
            checked={shouldSearchMethods}
            onChange={() => setShouldSearchMethod(!shouldSearchMethods)}
          />
          Search for methods
        </label>
        <input id="searchSubmit" type="submit" value="Search" />
      </form>
      <div>{loadingSearchResults ? <CircularProgress /> : <ul>{currentResult}</ul>}</div>
    </div>
  );
};

export default SearchExplorer;
