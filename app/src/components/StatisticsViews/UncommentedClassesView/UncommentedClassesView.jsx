import React, { useEffect, useState } from 'react';
import './UncommentedClassesView.css';
import { NavLink } from 'react-router-dom';
import { getUncommentedClasses } from '../../../utils/apiHandler';

const UncommentedClassesView = () => {
  const [uncommentedClasses, setUncommentedClasses] = useState([]);

  useEffect(() => {
    const simpleFetch = async () => setUncommentedClasses(await getUncommentedClasses());
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

export default UncommentedClassesView;
