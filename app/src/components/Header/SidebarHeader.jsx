import React from 'react';
import './SidebarHeader.css';
import logo from '../../ressources/images/logo.png';
import backButtonPic from '../../ressources/images/barClose.png';

const Header = () => (
  <div className="head">
    <img alt="" className="logo" src={logo} />
    <p className="sidebarHeadingC">Smaprat</p>
    <button className="closeButton" type="button">
      <img alt="" className="barClose" src={backButtonPic} />
    </button>
  </div>
);
export default Header;
