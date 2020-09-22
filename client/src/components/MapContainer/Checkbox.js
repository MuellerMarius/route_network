import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, onChange, checked, label, children }) => (
  <li key={name} className="settings__chkgrp-item">
    <div className="pretty p-switch p-fill">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <div className="state p-primary">
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
    {children}
  </li>
);

export default Checkbox;

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.element,
};

Checkbox.defaultProps = {
  checked: false,
  label: '',
};
