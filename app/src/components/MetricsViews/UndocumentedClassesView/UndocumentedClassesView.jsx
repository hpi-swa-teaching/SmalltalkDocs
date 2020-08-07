import React, { useEffect, useState } from 'react';
import { getUndocumentedClasses } from '../../../utils/BackendHandling/apiHandler';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import ResultEnumerationItem from '../../ResultEnumerationItem/ResultEnumerationItem';

import './UndocumentedClassesView.css';

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
          <ul className="undocumentedList">
            {uncommentedClasses.map(aClassName => (
              <ResultEnumerationItem
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
