import React from 'react';
import PropTypes from 'prop-types';


const UnknownStatistics = props => {
  const { statisticsName } = props;
  return <h1>Statistics {statisticsName} not found</h1>;
};

UnknownStatistics.propTypes = {
  statisticsName: PropTypes.string.isRequired
};

export default UnknownStatistics;
