import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUndocumentedMethodsOfClass } from '../../../utils/apiHandler';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import UndocumentedMethodsList from './UndocumentedMethodsList';

import './MethodsOfClassContainer.css';

// TODO: style component and remove isActive prop if not needed
const MethodsOfClassContainer = props => {
  const { theClassName, isActive } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [undocumentedClassMethods, setUndocumentedClassMethods] = useState([]);
  const [undocumentedInstanceMethods, setUndocumentedInstanceMethods] = useState([]);

  useEffect(() => {
    const simpleFetch = async () => {
      // avoid traffic
      if (!isActive) return;
      const undocumentedMethodsOfClassResponse = await getUndocumentedMethodsOfClass(theClassName);
      setUndocumentedClassMethods(undocumentedMethodsOfClassResponse.classMethods);
      setUndocumentedInstanceMethods(undocumentedMethodsOfClassResponse.instanceMethods);
    };
    simpleFetch().then(() => setIsLoading(false));
  }, [isActive, theClassName]);

  return (
    <div>
      {isActive ? (
        <div>
          {!isLoading ? (
            <div>
              <h2>Undocumented Class Methods</h2>
              <UndocumentedMethodsList
                currentClass={theClassName}
                methodList={undocumentedClassMethods}
                site="class"
              />
              <h2>Undocumented Instance Methods</h2>
              <UndocumentedMethodsList
                methodList={undocumentedInstanceMethods}
                currentClass={theClassName}
                site="instance"
              />
            </div>
          ) : (
            <LoadingIndicator />
          )}
        </div>
      ) : null}
    </div>
  );
};

MethodsOfClassContainer.propTypes = {
  theClassName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default MethodsOfClassContainer;
