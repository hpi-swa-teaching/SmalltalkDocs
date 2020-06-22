import React from 'react';
import SidebarHeader from '../Header/SidebarHeader';
import './MetricsSidebar.css';
import ClosedSidebarHeader from "../Header/ClosedSidebarHeader";

const MetricsSidebar = options => {
    function setBarState(open) {
        if(open){
            document.getElementById("SideBox").style.width = "417px";
            document.getElementById("OpenBox").style.width = "0px";
            options.setBar(true);
        }
        else{
            document.getElementById("SideBox").style.width = "0px";
            document.getElementById("OpenBox").style.width = "50px";
            options.setBar(false);
        }
    }

  return(
      <div>
          <div id="SideBox" className="sidenav">
            <SidebarHeader closeFunction={setBarState.bind(this)} />
            <p className="sidebarHeading2">Metrics</p>
          </div>
        <ClosedSidebarHeader closeFunction={setBarState.bind(this)}/>
      </div>
);};

export default MetricsSidebar;
