import React from 'react';
import './SidebarHeader.css';

import logo from '../../ressources/images/logo.png';
import backButtonPic from '../../ressources/images/barClose.png';

const Header = options => {
  return (
    <div id="head" className="head">
      <img alt="" className="logo" src={logo} />
      <p className="sidebarHeadingHead">Smaprat</p>
      <button className="closeButton" type="button" onClick={() => {options.closeFunction(false)}}>
        <img alt="" className="barClose" src={backButtonPic} />
      </button>
    </div>
  );
};
export default Header;
