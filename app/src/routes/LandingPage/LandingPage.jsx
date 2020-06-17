import React from 'react';
import './LandingPage.css';
import { NavLink } from 'react-router-dom';

const LandingPage = () => (

    <div className="frame">
        <h1 className="heading">Smaprat</h1>
        <h2 className="description">Welcome to Smaprat, a documentation for Smalltalk!</h2>
        <div  className="enterbutton">
          <NavLink className="enterLink" to={`../doku`}>
              Enter Doku
          </NavLink>
        </div>
    </div>

);

export default LandingPage;
