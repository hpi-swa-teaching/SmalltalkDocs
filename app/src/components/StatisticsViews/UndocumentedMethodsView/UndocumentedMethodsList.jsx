import React from 'react';
import PropTypes from 'prop-types';

import './UndocumentedMethodsList.css';
import { NavLink } from 'react-router-dom';
import { getPathToMethod } from '../../../utils/pathMapper';

// TODO: style component
// TODO: is it possible to use ResultEnumerationItem?
const UndocumentedMethodsList = props => {
  const { methodList, site, currentClass } = props;
  return (
    <div className="navListContainer">
      {methodList.map(aMethod => (
        <NavLink
          className="navButton"
          key={aMethod}
          to={getPathToMethod(aMethod, currentClass, site)}
        >
          {aMethod}
        </NavLink>
      ))}
    </div>
  );
};

UndocumentedMethodsList.propTypes = {
  methodList: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentClass: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired
};

export default UndocumentedMethodsList;
