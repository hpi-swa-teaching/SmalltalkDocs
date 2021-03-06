import React, { useState } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import ResultEnumerationItem from '../ResultEnumerationItem/ResultEnumerationItem';
import { getPathToMethod, getPathToClass } from '../../utils/PathHandling/pathMapper';
import { searchForClasses, searchForMethods } from '../../utils/BackendHandling/apiHandler';
import './SearchExplorer.css';

const SearchExplorer = () => {
  const [currentSearchText, setCurrentSearchText] = useState('');
  const [shouldSearchClasses, setShouldSearchClass] = useState(true);
  const [shouldSearchMethods, setShouldSearchMethod] = useState(true);

  const [foundClasses, setFoundClasses] = useState([]);
  const [foundMethods, setFoundMethods] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [existsError, setExistsError] = useState(false);
  const [isUsed, setIsUsed] = useState(false);

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
      <form onSubmit={event => doSearch(event)} onChange={() => setIsUsed(true)}>
        <input
          className="searchBox"
          type="text"
          id="searchInput"
          onChange={event => setCurrentSearchText(event.target.value)}
          placeholder="Search term with % as wildcard"
          size="30"
          value={currentSearchText}
        />
        <label htmlFor="classSearchCheck" className="checkClasses">
          <input
            id="classSearchCheck"
            name="classSearch"
            type="checkbox"
            className="checkBox"
            checked={shouldSearchClasses}
            onChange={() => setShouldSearchClass(!shouldSearchClasses)}
          />
          Search for classes
        </label>
        <label htmlFor="methodSearchCheck" className="checkMethods">
          <input
            id="methodSearchCheck"
            name="methodSearch"
            type="checkbox"
            className="checkBox"
            checked={shouldSearchMethods}
            onChange={() => setShouldSearchMethod(!shouldSearchMethods)}
          />
          Search for methods
        </label>
        <input className="submitButton" id="searchSubmit" type="submit" value="Search" />
      </form>
      <div className="resultBox">
        <ErrorIndicator
          errorState={existsError}
          errorStateSetter={setExistsError}
          errorMessage="Nothing found due to empty search string!"
          errorConditions={[
            { decisionFunction: isEmptySearchString, decisionValues: currentSearchText }
          ]}
          isActive={isUsed}
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
