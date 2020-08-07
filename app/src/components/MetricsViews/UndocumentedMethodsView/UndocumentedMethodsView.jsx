import React, { useEffect, useState } from 'react';
import { getClasses } from '../../../utils/BackendHandling/apiHandler';
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
            <li className="classListItem" key={aClassName}>
              <button
                className="classListButton"
                type="button"
                onClick={() =>
                  currentClass === aClassName ? setCurrentClass('') : setCurrentClass(aClassName)
                }
              >
                {aClassName}
              </button>
              {aClassName === currentClass ? (
                <MethodsOfClassContainer key={aClassName} theClassName={aClassName} />
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UndocumentedMethodsView;
