import React, { useState } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import ResultEnumerationItem from '../ResultEnumerationItem/ResultEnumerationItem';
import { getPathToMethod, getPathToClass } from '../../utils/pathMapper';
import { searchForClasses, searchForMethods } from '../../utils/apiHandler';
import './SearchExplorer.css';

const SearchExplorer = () => {
  const [currentSearchText, setCurrentSearchText] = useState('');
  const [shouldSearchClasses, setShouldSearchClass] = useState(true);
  const [shouldSearchMethods, setShouldSearchMethod] = useState(true);

  const [foundClasses, setFoundClasses] = useState([]);
  const [foundMethods, setFoundMethods] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [existsError, setExistsError] = useState(false);

  const isEmptySearchString = searchString => searchString.length <= 0;

  const doSearch = async event => {
    event.preventDefault();
    if (existsError) {
      return;
    }
    setIsLoading(true);
    setFoundClasses(shouldSearchClasses ? (await searchForClasses(currentSearchText)).sort() : []);
    setFoundMethods(shouldSearchMethods ? (await searchForMethods(currentSearchText)).sort() : []);
    setIsLoading(false);
  };

  return (
    <div className="explorer">
      <form onSubmit={event => doSearch(event)}>
        <input
          className="searchBox"
          type="text"
          id="searchInput"
          onChange={event => setCurrentSearchText(event.target.value)}
          placeholder="Search term with % as wildcard"
          size="30"
          value={currentSearchText}
        />
        <label htmlFor="classSearchCheck" className="check">
          <input
            id="classSearchCheck"
            name="classSearch"
            type="checkbox"
            checked={shouldSearchClasses}
            onChange={() => setShouldSearchClass(!shouldSearchClasses)}
          />
          Search for classes
        </label>
        <label htmlFor="methodSearchCheck" className="check">
          <input
            id="methodSearchCheck"
            name="methodSearch"
            type="checkbox"
            checked={shouldSearchMethods}
            onChange={() => setShouldSearchMethod(!shouldSearchMethods)}
          />
          Search for methods
        </label>
        <input className="submitButton" id="searchSubmit" type="submit" value="Search" />
      </form>
      <div className="resultBox">
        {/* TODO: style error message */}
        <ErrorIndicator
          errorState={existsError}
          errorStateSetter={setExistsError}
          errorMessage="Nothing found due to empty search string!"
          errorConditions={[
            { decisionFunction: isEmptySearchString, decisionValues: currentSearchText }
          ]}
        />
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <ul>
            {foundClasses.map(aClass => (
              <ResultEnumerationItem
                key={`classResult-${aClass}`}
                linkText={aClass}
                linkPath={getPathToClass(aClass)}
              />
            ))}
            {foundMethods.map(aMethodAnswer => (
              <ResultEnumerationItem
                key={`${aMethodAnswer.className}-${aMethodAnswer.side}-${aMethodAnswer.methodName}`}
                linkText={`${aMethodAnswer.className}:${aMethodAnswer.methodName}`}
                linkPath={getPathToMethod(
                  aMethodAnswer.methodName,
                  aMethodAnswer.className,
                  aMethodAnswer.side
                )}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchExplorer;
