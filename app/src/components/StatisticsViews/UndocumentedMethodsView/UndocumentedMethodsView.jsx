import React, { useEffect, useState } from 'react';
import { getUndocumentedMethods } from '../../../utils/apiHandler';
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch';

import './UndocumentedMethodsView.css';

const UndocumentedMethodsView = () => {
  const [fetchedMethods, setFetchedMethods] = useState([]);
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
    simpleFetch().then();
  }, []);

  return (
    <div>
      <h1>Undocumented Methods</h1>
      <ToggleSwitch isActive={sortBy} toggleChange={() => changeToggleSortBy()} />
      <ul>
        {fetchedMethods.sort(chooseSortByFunction()).map(aMethodInfo => (
          <li>
            {aMethodInfo.className}:{aMethodInfo.methodName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UndocumentedMethodsView;
