import React from 'react';
import './LoadingIndicator.css';

// https://loading.io/css/ - LDS Ellipsis
const LoadingIndicator = () => (
  <div className="lds-ellipsis">
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingIndicator;
