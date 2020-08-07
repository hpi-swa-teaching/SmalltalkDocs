import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './ErrorIndicator.css';

const ErrorIndicator = props => {
  const {
    errorConditions,
    errorMessage,
    errorState: existsError,
    errorStateSetter: setExistsError,
    isActive
  } = props;

  useEffect(
    () =>
      setExistsError(
        errorConditions
          .map(({ decisionFunction, decisionValues }) => decisionFunction(decisionValues))
          .includes(true)
      ),
    [errorConditions, existsError, setExistsError]
  );

  return existsError && isActive ? <div className="errorText">{errorMessage}</div> : null;
};

ErrorIndicator.propTypes = {
  errorConditions: PropTypes.arrayOf(
    PropTypes.shape({
      decisionFunction: PropTypes.func.isRequired,
      decisionValues: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.string)
      ])
    })
  ).isRequired,
  errorMessage: PropTypes.string,
  errorState: PropTypes.bool.isRequired,
  errorStateSetter: PropTypes.func.isRequired,
  isActive: PropTypes.bool
};

ErrorIndicator.defaultProps = {
  errorMessage: 'An error occurred. Please check your input or contact support.',
  isActive: true
};

export default ErrorIndicator;
