import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { getAllMethodsOf, getClass } from '../../utils/apiHandler';
import './MethodSidebar.css';
import SidebarHeader from '../Header/SidebarHeader';

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
        <NavLink
          className="linktext"
          to={`/doku/classes/${currentClass}/methods/${side}/${aMethodName}`}
        >
          {aMethodName}
        </NavLink>
      </li>
    ));

  return (
    <div className="sidebar">
      <SidebarHeader />
      <div>
        <button
          className="backButton"
          type="button"
          key="goBack"
          onClick={() => history.push('/doku')}
        >
          Categories
        </button>
        <button
          className="backButton"
          type="button"
          key="showHelp"
          onClick={() => history.push(`/doku/help/${currentClass}`)}
          disabled={!hasHelpPage}
        >
          Help Page
        </button>
      </div>

      <NavLink className="sidebarHeading sidebarHeadingLink" to={`/doku/classes/${currentClass}`}>
        {currentClass}
      </NavLink>

      <p className="sidebarHeading2">Class Methods</p>
      <div className="ClassMethodList">{createMethodList('class', classMethods)}</div>

      <p className="sidebarHeading2">Instance Methods</p>
      <div className="InstanceMethodList">{createMethodList('instance', instanceMethods)}</div>
    </div>
  );
};

export default MethodSidebar;

MethodSidebar.propTypes = {
  currentClass: PropTypes.string.isRequired
};
