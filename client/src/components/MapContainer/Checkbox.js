import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, onChange, checked, label }) => {
  return (
    <li key={name} className="settings__chkgrp-item">
      <div className="pretty p-switch p-fill">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={() => onChange(!checked)}
        />
        <div className="state p-primary">
          <label>{label}</label>
        </div>
      </div>
    </li>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  label: '',
};
