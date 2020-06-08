import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { getAllMethodsOf, getClass } from '../../utils/apiHandler';
import './MethodSidebar.css';

const MethodSidebar = ({ currentClass }) => {
  const history = useHistory();
  const [classMethods, setClassSide] = useState([]);
  const [instanceMethods, setInstanceSide] = useState([]);
  const [hasHelpPage, setHasHelpPage] = useState(false);

  // TODO: refactor to functional style
  useEffect(() => {
    async function simpleFetch() {
      const classInfo = await getClass(currentClass);
      setHasHelpPage(classInfo.isHelpBook);
      const methods = await getAllMethodsOf(currentClass);
      setClassSide([].concat(methods.classMethods).sort());
      setInstanceSide([].concat(methods.instanceMethods).sort());
    }
    simpleFetch();
  }, [currentClass]);

  const createMethodList = (side, methodNames) =>
    methodNames.map(aMethodName => (
      <li key={`${side}-${aMethodName}`}>
        <NavLink to={`/classes/${currentClass}/methods/${side}/${aMethodName}`}>
          {aMethodName}
        </NavLink>
      </li>
    ));

  return (
    <div className="sidebar">
      <NavLink key="allClasses" to="/">
        All classes...
      </NavLink>

      <button type="button" key="goBack" onClick={() => history.goBack()}>
        Go Back
      </button>

      <NavLink key="helpPage" to={`/help/${currentClass}`} disabled={!hasHelpPage}>
        Help Page
      </NavLink>
      <h2>Class Side</h2>
      <ul>{createMethodList('class', classMethods)}</ul>
      <h2>Instance Side</h2>
      <ul>{createMethodList('instance', instanceMethods)}</ul>
    </div>
  );
};

export default MethodSidebar;

MethodSidebar.propTypes = {
  currentClass: PropTypes.string.isRequired
};
