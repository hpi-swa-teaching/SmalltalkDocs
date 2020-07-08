import React, { useEffect, useState } from 'react';
import { getUndocumentedMethods } from '../../../utils/apiHandler';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch';

import './UndocumentedMethodsView.css';
import ResultEnumeration from '../ResultEnumeration/ResultEnumeration';

const UndocumentedMethodsView = () => {
  const [fetchedMethods, setFetchedMethods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // sortBy=false --> sort by className, sortBy=true --> sort by methodName
  const [sortBy, setSortBy] = useState(false);

  const changeToggleSortBy = () => setSortBy(!sortBy);

  const sortByMethodNames = (methodInfoA, methodInfoB) =>
    methodInfoA.methodName.localeCompare(methodInfoB.methodName);
  const sortByClassNames = (methodInfoA, methodInfoB) =>
    methodInfoA.className.localeCompare(methodInfoB.className);

  const chooseSortByFunction = sortBy ? sortByMethodNames : sortByClassNames;

  useEffect(() => {
    const simpleFetch = async () => setFetchedMethods(await getUndocumentedMethods());
    simpleFetch().then(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Undocumented Methods</h1>
      <ToggleSwitch isActive={sortBy} toggleChange={() => changeToggleSortBy()} />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ul className="undocumentedList">
          {fetchedMethods
            .sort((methodInfoA, methodInfoB) => chooseSortByFunction()(methodInfoA, methodInfoB))
            .map(aMethodInfo => (
              <ResultEnumeration
                linkText={`${aMethodInfo.className}:${aMethodInfo.methodName}`}
                linkPath={`/doku/classes/${aMethodInfo.className}/methods/${aMethodInfo.side}/${aMethodInfo.methodName}`}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default UndocumentedMethodsView;
