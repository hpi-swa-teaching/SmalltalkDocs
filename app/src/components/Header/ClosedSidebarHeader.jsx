import React from 'react';
import './ClosedSidebarHeader.css';

import backButtonPic from '../../ressources/images/barClose.png';

const Header = options => {
    return (
        <div id="OpenBox" className="closedhead" data-testid="closedhead">
            <button className="openButton" type="button" onClick={() => {options.closeFunction(true)}}>
                <img alt="" className="barOpen" src={backButtonPic} />
            </button>
        </div>
    );
};
export default Header;
