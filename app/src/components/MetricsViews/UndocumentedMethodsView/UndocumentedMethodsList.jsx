import React from 'react';
import PropTypes from 'prop-types';

import './UndocumentedMethodsList.css';
import { NavLink } from 'react-router-dom';
import { getPathToMethod } from '../../../utils/PathHandling/pathMapper';

const UndocumentedMethodsList = props => {
  const { methodList, side, currentClass } = props;
  return (
    <div className="navListContainer">
      {methodList.map(aMethod => (
        <NavLink
          className="navButton"
          key={aMethod}
          to={getPathToMethod(aMethod, currentClass, side)}
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
  side: PropTypes.string.isRequired
};

export default UndocumentedMethodsList;
