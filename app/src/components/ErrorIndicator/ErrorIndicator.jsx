import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './ErrorIndicator.css';

// TODO: do we need any tests for this component?
// TODO: Fix error message is shown when reloading the page without searching
const ErrorIndicator = props => {
  const {
    errorConditions,
    errorMessage,
    errorState: existsError,
    errorStateSetter: setExistsError
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

  return existsError ? <div className="errorText">{errorMessage}</div> : null;
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
  errorStateSetter: PropTypes.func.isRequired
};

ErrorIndicator.defaultProps = {
  errorMessage: 'An error occurred. Please check your input or contact support.'
};

export default ErrorIndicator;
