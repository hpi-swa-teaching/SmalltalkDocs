import React, { useEffect, useState } from 'react';
import { getClasses } from '../../../utils/apiHandler';
import MethodsOfClassContainer from './MethodsOfClassContainer';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';

import './UndocumentedMethodsView.css';

const UndocumentedMethodsView = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [currentClass, setCurrentClass] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simpleFetch = async () => setAllClasses(await getClasses());
    simpleFetch().then(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Undocumented Methods</h1>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ul className="classList">
          {allClasses.map(aClassName => (
            <li key={aClassName}>
              <button type="button" onClick={() => setCurrentClass(aClassName)}>
                {aClassName}
              </button>
              {aClassName === currentClass ? (
                <MethodsOfClassContainer
                  key={aClassName}
                  theClassName={aClassName}
                  isActive={aClassName === currentClass}
                />
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UndocumentedMethodsView;
