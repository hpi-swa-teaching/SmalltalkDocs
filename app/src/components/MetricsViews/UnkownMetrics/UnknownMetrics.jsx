import React from 'react';
import PropTypes from 'prop-types';
import './UnknownMetrics.css';

// TODO: style component
const UnknownStatistics = props => {
  const { statisticsName } = props;
  return <div>Statistics {statisticsName} not found</div>;
};

UnknownStatistics.propTypes = {
  statisticsName: PropTypes.string.isRequired
};

export default UnknownStatistics;
