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
        <NavLink className="navlinktext" key="allClasses" to="/doku/">
          All classes...
        </NavLink>
      </div>
      <div>
        <NavLink
          className="navlinktext"
          key="helpPage"
          to={`/help/${currentClass}`}
          disabled={!hasHelpPage}
        >
          Help Page
        </NavLink>
      </div>

      <p className="sidebarHeading">Class Side</p>

      <div className="ClassMethodList">{createMethodList('class', classMethods)}</div>
      <p className="sidebarHeading">Instance Side</p>

      <div className="InstanceMethodList">{createMethodList('instance', instanceMethods)}</div>

      <button className="backButton" type="button" key="goBack" onClick={() => history.goBack()}>
        Go Back
      </button>
    </div>
  );
};

export default MethodSidebar;

MethodSidebar.propTypes = {
  currentClass: PropTypes.string.isRequired
};
