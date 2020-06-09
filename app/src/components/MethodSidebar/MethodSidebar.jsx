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
        <NavLink class="linktext" to={`/classes/${currentClass}/methods/${side}/${aMethodName}`}>
          {aMethodName}
        </NavLink>
      </li>
    ));

  return (
    <div className="sidebar">
        <div>
            <NavLink class="backlinktext" key="allClasses" to="/">
                All classes...
            </NavLink>
        </div>
        <div>
            <NavLink class="helplinktext" key="helpPage" to={`/help/${currentClass}`} disabled={!hasHelpPage}>
                Help Page
            </NavLink>
        </div>

            <p className="sidebarHeadingC">Class Side</p>

        <ul className="methodListC">{createMethodList('class', classMethods)}</ul>
        <p className="sidebarHeadingI">Instance Side</p>
        <ul className="methodListI">{createMethodList('instance', instanceMethods)}</ul>
        <button type="button" key="goBack" onClick={() => history.goBack()}>
            Go Back
        </button>

    </div>
  );
};

export default MethodSidebar;

MethodSidebar.propTypes = {
  currentClass: PropTypes.string.isRequired
};
