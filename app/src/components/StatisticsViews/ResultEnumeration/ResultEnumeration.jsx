import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ResultEnumeration.css';

// TODO: style component
const ResultEnumeration = props => {
  const { linkText, linkPath } = props;
  return (
    <li>
      <NavLink to={linkPath}>{linkText}</NavLink>
    </li>
  );
};

ResultEnumeration.propTypes = {
  linkText: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired
};

export default ResultEnumeration;
