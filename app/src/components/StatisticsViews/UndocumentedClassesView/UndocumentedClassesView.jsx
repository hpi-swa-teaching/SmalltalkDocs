import React, { useEffect, useState } from 'react';
import { getUndocumentedClasses } from '../../../utils/apiHandler';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import ResultEnumeration from '../ResultEnumeration/ResultEnumeration';

const UndocumentedClassesView = () => {
  const [uncommentedClasses, setUncommentedClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simpleFetch = async () => setUncommentedClasses(await getUndocumentedClasses());
    simpleFetch().then(() => setIsLoading(false));
  }, []);
  // TODO: style component
  return (
    <div>
      <h1>Uncommented Classes</h1>
      {!isLoading ? (
        <div>
          <ul>
            {uncommentedClasses.map(aClassName => (
              <ResultEnumeration
                key={aClassName}
                linkText={aClassName}
                linkPath={`/doku/classes/${aClassName}`}
              />
            ))}
          </ul>
        </div>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
};

export default UndocumentedClassesView;
