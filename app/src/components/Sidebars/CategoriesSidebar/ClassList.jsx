import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getClassesOfCategories } from '../../../utils/BackendHandling/apiHandler';
import { getPathToClass } from '../../../utils/PathHandling/pathMapper';
import './ClassList.css';

const ClassList = props => {
  const { categoryName } = props;
  const [relatedClasses, setRelatedClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simpleFetch = async () => setRelatedClasses(await getClassesOfCategories(categoryName));
    simpleFetch().then(() => setLoading(false));
  }, [categoryName]);

  return (
    <ul>
      {loading
        ? null
        : relatedClasses.map(aClassName => (
            <li className="classList" key={`${aClassName}`}>
              <div className="classLinkBox">
                <NavLink className="classLink" to={getPathToClass(aClassName)}>
                  {aClassName}
                </NavLink>
              </div>
            </li>
          ))}
    </ul>
  );
};

ClassList.propTypes = {
  categoryName: PropTypes.string.isRequired
};

export default ClassList;
