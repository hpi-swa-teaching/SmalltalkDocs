import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getClass, getClassMethods, getInstanceMethods } from '../../../utils/apiHandler';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import MethodList from './MethodList';

import '../Sidebars.css';
import './MethodSidebar.css';

const MethodSidebar = props => {
  const { currentClass, isOpen, toggleIsOpen } = props;

  const history = useHistory();

  const [classMethods, setClassSide] = useState([]);
  const [instanceMethods, setInstanceSide] = useState([]);
  const [hasHelpPage, setHasHelpPage] = useState(false);

  useEffect(() => {
    const fetchBookState = async () => setHasHelpPage((await getClass(currentClass)).isHelpBook);
    const fetchInstanceMethods = async () =>
      setInstanceSide([].concat(await getInstanceMethods(currentClass)).sort());
    const fetchClassMethods = async () =>
      setClassSide([].concat(await getClassMethods(currentClass)).sort());
    fetchBookState().then();
    fetchInstanceMethods().then();
    fetchClassMethods().then();
  }, [currentClass]);

  return (
    <div id={isOpen ? 'openSidebarBox' : 'closedSidebarBox'} className="sidenav">
      <SidebarHeader isOpen={isOpen} toggleOpen={toggleIsOpen} />
      {isOpen ? (
        <div>
          <button
            className="backToCategoriesBtn"
            type="button"
            key="goBack"
            onClick={() => history.push('/doku')}
          >
            Categories
          </button>
          <NavLink
            className="secondarySidebarTitle secondarySidebarTitleLink"
            to={`/doku/classes/${currentClass}`}
          >
            {currentClass}
          </NavLink>

          {hasHelpPage ? (
            <NavLink className="secondarySidebarTitle" to={`/doku/help/${currentClass}`}>
              Help Page
            </NavLink>
          ) : null}

          <p className="secondarySidebarTitle">Class Methods</p>
          <MethodList currentClass={currentClass} side="class" methodNames={classMethods} />

          <p className="secondarySidebarTitle">Instance Methods</p>
          <MethodList currentClass={currentClass} side="instance" methodNames={instanceMethods} />
        </div>
      ) : null}
    </div>
  );
};

MethodSidebar.propTypes = {
  currentClass: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired
};

export default MethodSidebar;
