import React from 'react';
import './SidebarHeader.css';
import { useHistory } from 'react-router';
import logo from '../../ressources/images/logo.png';
import backButtonPic from '../../ressources/images/barClose.png';

const Header = () => {
  const history = useHistory();
  return (
    <div className="head">
      <img alt="" className="logo" src={logo} />
      <p className="sidebarHeading">Smaprat</p>
      <button className="closeButton" type="button" onClick={() => history.push('/')}>
        <img alt="" className="barClose" src={backButtonPic} />
      </button>
    </div>
  );
};
export default Header;
