import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './SidebarHeader.css';

import logo from '../../../ressources/images/logo.png';
import backButtonPic from '../../../ressources/images/barClose.png';

const SidebarHeader = props => {
  const { isOpen, toggleOpen } = props;
  return (
    <div className={isOpen ? 'openedHead' : 'closedHead'}>
      {isOpen ? (
        <div>
          <NavLink to="/">
            <img alt="" className="logo" src={logo} />
          </NavLink>
          <p className="headTitle">Småprat</p>
        </div>
      ) : null}

      <button
        className={isOpen ? 'closeButton' : 'openButton'}
        type="button"
        onClick={() => {
          toggleOpen();
        }}
      >
        <img alt="ActionLogo" className={isOpen ? 'closePic' : 'openPic'} src={backButtonPic} />
      </button>
    </div>
  );
};

SidebarHeader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

export default SidebarHeader;
