import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUndocumentedClasses } from '../../../utils/apiHandler';

const UndocumentedClassesView = () => {
  const [uncommentedClasses, setUncommentedClasses] = useState([]);

  useEffect(() => {
    const simpleFetch = async () => setUncommentedClasses(await getUndocumentedClasses());
    simpleFetch().then();
  }, []);
  return (
    <div>
      <h1>Uncommented Classes</h1>
      <div>
        {uncommentedClasses.map(aClassName => (
          <NavLink key={aClassName} to={`/doku/classes/${aClassName}`}>
            {aClassName}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default UndocumentedClassesView;
