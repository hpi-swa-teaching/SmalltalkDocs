import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { getAllMethodsOf, getClass } from '../../../utils/apiHandler';
import './MethodSidebar.css';
import '../Sidebars.css';

const MethodSidebar = options => {
  const history = useHistory();
  const [classMethods, setClassSide] = useState([]);
  const [instanceMethods, setInstanceSide] = useState([]);
  const [hasHelpPage, setHasHelpPage] = useState(false);

  // TODO: refactor to functional style
  useEffect(() => {
    async function simpleFetch() {
      const classInfo = await getClass(options.currentClass);
      setHasHelpPage(classInfo.isHelpBook);
      const methods = await getAllMethodsOf(options.currentClass);
      setClassSide([].concat(methods.classMethods).sort());
      setInstanceSide([].concat(methods.instanceMethods).sort());
    }
    simpleFetch();
  }, [options.currentClass]);

  const createMethodList = (side, methodNames) =>
    methodNames.map(aMethodName => (
      <li key={`${side}-${aMethodName}`}>
        <NavLink
          className="linktext"
          to={`/doku/classes/${options.currentClass}/methods/${side}/${aMethodName}`}
        >
          {aMethodName}
        </NavLink>
      </li>
    ));

  return (
    <div>
      <div id="SideBox" className="sidebar">
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
            onClick={() => history.push(`/doku/help/${options.currentClass}`)}
            disabled={!hasHelpPage}
          >
            Help Page
          </button>
        </div>

        <NavLink
          className="sidebarHeading sidebarHeadingLink"
          to={`/doku/classes/${options.currentClass}`}
        >
          {options.currentClass}
        </NavLink>

        <p className="sidebarMethodHeading2">Class Methods</p>
        <div className="ClassMethodList">{createMethodList('class', classMethods)}</div>

        <p className="sidebarMethodHeading2">Instance Methods</p>
        <div className="InstanceMethodList">{createMethodList('instance', instanceMethods)}</div>
      </div>
    </div>
  );
};

export default MethodSidebar;
