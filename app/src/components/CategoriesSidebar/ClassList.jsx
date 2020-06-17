import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getClassesOfCategories } from '../../utils/apiHandler';
import './ClassList.css';

const ClassList = props => {
  const { categoryName } = props;
  const [relatedClasses, setRelatedClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simpleFetch = async () => setRelatedClasses(await getClassesOfCategories(categoryName));
    simpleFetch().then(setLoading(false));
  }, [categoryName]);

  return (
    <ul>
      {loading
        ? null
        : relatedClasses.map(aClassName => (
            <li className="classlist" key={`${aClassName}`}>
              <div className="classlinkbox">
                <NavLink className="classlink" to={`/doku/classes/${aClassName}`}>
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
