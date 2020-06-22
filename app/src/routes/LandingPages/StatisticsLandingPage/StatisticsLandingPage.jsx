import React from 'react';
import MetricsSidebar from '../../../components/MetricsSidebar/MetricsSidebar';
import '../LandingPages.css';
import './StatisticsLandingPage.css';

const StatisticsLandingPage = () => {

    function setBarVisibility(isVisible) {
        if (isVisible) {
            document.getElementById("main").style.marginLeft = "417px";
        } else {
            document.getElementById("main").style.marginLeft = "50px";
        }
    }
    return(
    <div className="bigBox">
        <div>
            <MetricsSidebar setBar={setBarVisibility.bind(this)}/>
        </div>
        <div id="main" className="main">
            <h1>Welcome to Smaprat!</h1>
            <h2 id="description">Start by selecting a metric from the list on the left :)</h2>
        </div>
    </div>
    );
};

export default StatisticsLandingPage;
