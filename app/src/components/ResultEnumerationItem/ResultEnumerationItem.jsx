import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ResultEnumerationItem.css';

const ResultEnumerationItem = props => {
  const { linkText, linkPath } = props;
  return (
    <li className="resultEnumerationList">
      <NavLink className="resultEnumerationLink" to={linkPath}>
        {linkText}
      </NavLink>
    </li>
  );
};

ResultEnumerationItem.propTypes = {
  linkText: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired
};

export default ResultEnumerationItem;
