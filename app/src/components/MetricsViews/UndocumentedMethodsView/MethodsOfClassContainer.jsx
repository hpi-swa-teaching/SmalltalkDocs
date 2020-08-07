import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUndocumentedMethodsOfClass } from '../../../utils/BackendHandling/apiHandler';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import UndocumentedMethodsList from './UndocumentedMethodsList';

import './MethodsOfClassContainer.css';

const MethodsOfClassContainer = props => {
  const { theClassName } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [undocumentedClassMethods, setUndocumentedClassMethods] = useState([]);
  const [undocumentedInstanceMethods, setUndocumentedInstanceMethods] = useState([]);

  useEffect(() => {
    const simpleFetch = async () => {
      const undocumentedMethodsOfClassResponse = await getUndocumentedMethodsOfClass(theClassName);
      setUndocumentedClassMethods(undocumentedMethodsOfClassResponse.classMethods);
      setUndocumentedInstanceMethods(undocumentedMethodsOfClassResponse.instanceMethods);
    };
    simpleFetch().then(() => setIsLoading(false));
  }, [theClassName]);

  return (
    <div className="listContainer">
      {!isLoading ? (
        <div>
          <h2 className="listHeading">Undocumented Class Methods</h2>
          <UndocumentedMethodsList
            currentClass={theClassName}
            methodList={undocumentedClassMethods}
            site="class"
          />
          <h2 className="listHeading">Undocumented Instance Methods</h2>
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
  );
};

MethodsOfClassContainer.propTypes = {
  theClassName: PropTypes.string.isRequired
};

export default MethodsOfClassContainer;
