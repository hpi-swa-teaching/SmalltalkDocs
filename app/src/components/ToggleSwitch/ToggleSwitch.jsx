// based on https://upmostly.com/tutorials/build-a-react-switch-toggle-component
import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = props => {
  const { isActive, toggleChange } = props;
  return (
    <div>
      <input
        className="toggle-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
        checked={isActive}
        onChange={toggleChange}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
      <label className="toggle-switch-label" htmlFor="react-switch-new">
        <span className="toggle-switch-button" />
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleChange: PropTypes.func.isRequired
};

export default ToggleSwitch;
