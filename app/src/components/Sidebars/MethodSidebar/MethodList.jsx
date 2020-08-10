import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getPathToMethod } from '../../../utils/PathHandling/pathMapper';
import './MethodList.css';

const MethodList = props => {
  const { currentClass, side, methodNames } = props;

  return (
    <div className="methodList">
      {methodNames.map(aMethodName => (
        <li key={`${side}-${aMethodName}`}>
          <NavLink className="LinkText" to={getPathToMethod(aMethodName, currentClass, side)}>
            {aMethodName}
          </NavLink>
        </li>
      ))}
    </div>
  );
};

MethodList.propTypes = {
  currentClass: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  methodNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MethodList;
