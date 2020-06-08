import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { getClasses } from '../../utils/apiHandler';

import './ClassSidebar.css';

const ClassSidebar = () => {
  const location = useLocation();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simpleFetch = async () => setClasses(await getClasses());
    simpleFetch().then(setLoading(false));
  }, [location]);

  const createClassList = classNames =>
    classNames.map(aClass => (
      // TODO: style button as a material UI TreeItem
      <li key={`${aClass}-a`}>
        <NavLink to={`/classes/${aClass}`}>{aClass}</NavLink>
      </li>
    ));

  return <div className="sidebar">{loading ? null : <ul>{createClassList(classes)}</ul>}</div>;
};

export default ClassSidebar;
