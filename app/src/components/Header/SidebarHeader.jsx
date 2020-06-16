import React from 'react';
import './SidebarHeader.css';


const Header = () => {
    return(
        <div className={"head"}>
            <img  alt="" className="logo" />
            <p className="sidebarHeadingC">Smaprat</p>
            <button className="closeButton" type="button"><img  className="barClose" /></button>
        </div>
    );

}
export default Header;